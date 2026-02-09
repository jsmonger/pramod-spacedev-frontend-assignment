import { useCallback, useEffect, useMemo, useState } from "react";

import { useData } from "../state/DataContext";
import ProductTable from "../features/product/ProductTable";
import ProductModal from "../features/product/ProductModal";
import { productColumns } from "../features/product/productColumns";

import useModal from "../hooks/useModal";
import useDebounce from "../hooks/useDebounce";
import PageHeader from "../components/layout/PageHeader";
import CreateProduct from "../features/product/CreateProduct";
import { createProductDTO } from "../features/product/product.helpers";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import ProductPageSkeleton from "../Skeletons/ProductPageSkeleton";

const ProductsPage = () => {
  const { items, fetchItems, totalItems } = useData();

  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const debouncedSearch = useDebounce(searchText, 300);
  const { isOpen, open, close } = useModal();
  const {
    isOpen: isCreateModalOpen,
    open: openCreateModal,
    close: closeCreateModal,
  } = useModal();

  // 🔹 Data fetching (mapped 1:1 from Items.jsx)
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    setIsLoading(true);

    fetchItems(signal, debouncedSearch, page, limit)
      .catch((err) => {
        // ✅ Ignore abort errors
        if (err.name === "AbortError") return;

        console.error(err);
      })
      .finally(() => setIsLoading(false));

    return () => controller.abort();
  }, [fetchItems, debouncedSearch, page, limit]);

  const handleAddProduct = (productDetails) => {
    const dto = createProductDTO(productDetails);

    try {
      // call the create product api here
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchText(value);
    setPage(1);
  };

  const handlePageChange = useCallback((nextPage) => setPage(nextPage), []);

  const handleLimitChange = useCallback((nextLimit) => {
    setLimit(nextLimit);
    setPage(1); //
  }, []);

  const onView = (row) => {
    open();
    setSelectedItem(row.id);
  };

  // 🔹 Columns with modal hook injected
  const columns = useMemo(
    () =>
      productColumns.map((col) =>
        col.key === "actions"
          ? { ...col, renderer: (row) => col.renderer(row, onView) }
          : col,
      ),
    [open],
  );

  const toolBarActions = useMemo(() => {
    const left = (
      <Input
        value={searchText}
        onChange={handleSearchChange}
        placeholder="Search items…"
        className="w-80"
      />
    );

    const right = <Button onClick={openCreateModal}>+ Add item</Button>;

    return { left, right };
  }, [searchText]);

  return (
    <>
      <PageHeader
        title="Items"
        description="Manage your products and devices"
      />

      {isLoading ? (
        <ProductPageSkeleton />
      ) : (
        <ProductTable
          data={items}
          columns={columns}
          page={page}
          limit={limit}
          total={totalItems}
          onPageChange={handlePageChange}
          onLimitChange={handleLimitChange}
          toolBarActions={toolBarActions}
        />
      )}

      {isOpen && (
        <ProductModal productId={selectedItem} open={isOpen} onClose={close} />
      )}
      {isCreateModalOpen && (
        <CreateProduct
          open={isCreateModalOpen}
          onClose={closeCreateModal}
          onCreate={handleAddProduct}
        />
      )}
    </>
  );
};

export default ProductsPage;

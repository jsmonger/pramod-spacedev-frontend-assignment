import { useEffect, useState, useCallback } from "react";
import Modal from "../../components/ui/Modal";
import Button from "../../components/ui/Button";
import ProductSkeleton from "../../Skeletons/ProductSkeleton";

const ProductModal = ({ productId, open, onClose }) => {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchItemById = useCallback(
    async (signal) => {
      try {
        setIsLoading(true);
        const res = await fetch(`/api/items/${productId}`, { signal });
        const data = await res.json();

        setProduct(data);
      } catch (error) {
        if (error.name === "AbortError") return;

        console.error(error);
      } finally {
        setIsLoading(false);
      }
    },
    [productId],
  );

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    if (productId) fetchItemById(signal);

    return () => controller.abort();
  }, []);

  return (
    <Modal open={open} onClose={onClose} title="Product details">
      <div className="space-y-5">
        {/* Image */}
        {isLoading ? (
          <div>
            <ProductSkeleton />
          </div>
        ) : (
          <>
            <div className="w-full overflow-hidden rounded-lg bg-gray-100">
              <img
                src={
                  product?.image_url || "https://via.placeholder.com/800x500"
                }
                alt={product?.name}
                className="h-64 w-full object-cover"
              />
            </div>

            <h3 className="text-xl font-semibold text-gray-900">
              {product?.name}
            </h3>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-500">Category</p>
                <p className="font-medium">{product?.category}</p>
              </div>

              <div>
                <p className="text-gray-500">Price</p>
                <p className="font-medium">
                  ${product?.price?.toLocaleString()}
                </p>
              </div>
            </div>
          </>
        )}

        {/* Actions */}
        <div className="flex justify-end gap-3 border-t pt-4">
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ProductModal;

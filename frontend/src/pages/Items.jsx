import React, { useCallback, useEffect, useRef, useState } from "react";
import { List } from "react-window";

import { useData } from "../state/DataContext";
import Item from "./Item";
import Footer from "./Footer";

function Items() {
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);

  const [isLoading, setIsLoading] = useState(false);

  const { items, fetchItems, totalItems } = useData();

  useEffect(() => {
    // Used a signal-based approach instead of a flag because
    // AbortController cancels in-flight (slow) requests on unmount,
    // whereas a flag only prevents setState and does not stop the request itself.
    const controller = new AbortController();
    const signal = controller.signal;

    setIsLoading(true);
    fetchItems(signal, searchText, page, limit)
      .catch(console.error)
      .finally(() => {
        setIsLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, [fetchItems, searchText, page, limit]);

  const handleSearchTextChange = useCallback((e) => {
    const value = e.target.value?.trim();
    setSearchText(value);
    setPage(1);
  }, []);

  const handlePageChange = (page) => {
    setPage(page);
  };

  const handleLimitChange = (limit) => {
    setLimit(limit);
    setPage(1);
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <input
        type="text"
        value={searchText}
        onChange={handleSearchTextChange}
        placeholder="Type here..."
      />

      <div className="itemsContainer">
        <List
          rowComponent={Item}
          rowCount={items.length}
          rowHeight={24}
          rowProps={{ items }}
        />
      </div>
      <Footer
        page={page}
        limit={limit}
        total={totalItems}
        onPageChange={handlePageChange}
        onLimitChange={handleLimitChange}
      />
    </div>
  );
}

export default Items;

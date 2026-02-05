import React, { createContext, useCallback, useContext, useState } from "react";

const DataContext = createContext();

export function DataProvider({ children }) {
  const [items, setItems] = useState([]);
  const [totalItems, setTotalItems] = useState(true);

  const fetchItems = useCallback(
    async (signal, searchText = "", page = 1, limit = 20) => {
      const res = await fetch(
        `/api/items?q=${searchText}&page=${page}&limit=${limit}`,
        {
          signal,
        },
      ); // Intentional bug: backend ignores limit
      const json = await res.json();

      setItems(json.data);
      setTotalItems(json.total);
    },
    [],
  );

  return (
    <DataContext.Provider value={{ items, fetchItems, totalItems }}>
      {children}
    </DataContext.Provider>
  );
}

export const useData = () => useContext(DataContext);

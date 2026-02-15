import { Routes, Route } from "react-router-dom";

import "../index.css";

import { DataProvider } from "../state/DataContext";
import ProductsPage from "./ProductsPage";

function App() {
  return (
    <DataProvider>
      <Routes>
        <Route path="/" element={<ProductsPage />} />
      </Routes>
    </DataProvider>
  );
}

export default App;

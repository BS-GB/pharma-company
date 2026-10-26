
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/Home/HomePage";
import AboutPage from "../pages/About/AboutPage";
import ProductsPage from "../pages/Products/ProductsPage";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

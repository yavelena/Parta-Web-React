import { Routes, Route } from "react-router";

import Layout from "./components/Layout";
import DashboardPage from "./pages/DashboardPage";
import InventorySearchPage from "./pages/InventorySearchPage";
import DigiKeySearchPage from "./pages/DigiKeySearchPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />} >
        <Route path="/" element={<DashboardPage/>} />
        <Route path="/inventory" element={<InventorySearchPage />} />
        <Route path="/digikey-search" element={<DigiKeySearchPage />} />
      </Route>
    </Routes>
  );
}
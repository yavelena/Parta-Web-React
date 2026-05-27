import { Routes, Route } from "react-router";

import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import InventorySearch from "./pages/InventorySearch";
import DigiKeySearch from "./pages/DigiKeySearch";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />} >
        <Route path="/" element={<Dashboard />} />
        <Route path="/inventory" element={<InventorySearch />} />
        <Route path="/digikey-search" element={<DigiKeySearch />} />
      </Route>
    </Routes>
  );
}
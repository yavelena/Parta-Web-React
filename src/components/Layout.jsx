import { Outlet } from "react-router";

import IconSprite from "./IconSprite";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Layout() {
    return (
        <div className="container">
            <IconSprite />

            <Sidebar />
            <div className="sidebar-overlay" id="sidebar-overlay"></div>

            <Header />

            <main className="flex-col gap-4">
                <Outlet />
            </main>

            <footer>
                <p>&copy; 2026 Parta Inventory</p>
            </footer>
        </div>
    );
}
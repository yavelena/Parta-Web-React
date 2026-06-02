import { useState } from "react";
import { Outlet } from "react-router";

import IconSprite from "./IconSprite";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Layout() {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="container">
            <IconSprite />

            <Sidebar
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
            />

            <div 
                className={isSidebarOpen ? "sidebar-overlay show" : "sidebar-overlay"}
                onClick={() => setIsSidebarOpen(false)}
            ></div>

            <Header onMenuOpen={() => setIsSidebarOpen(true)}/>

            <main className="flex-col gap-4">
                <Outlet />
            </main>

            <footer>
                <p>&copy; 2026 Parta Inventory</p>
            </footer>
        </div>
    );
}
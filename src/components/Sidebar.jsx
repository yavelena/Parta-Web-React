import { NavLink } from "react-router";

import Icon from "./Icon";

export default function Sidebar() {
    return (
        <aside id="sidebar">

            <div className="sidebar-header row-space-between">

                <NavLink to="/" className="sidebar-logo row-vertical-center">
                    <div id="logo" className="blue-bg flex-center">
                        PI
                    </div>
                    <span className="logo-text">Parta Inventory</span>
                </NavLink>

                <button
                    id="menu-close"
                    className="menu-close flex-center"
                    type="button"
                    aria-label="Close menu"
                    aria-controls="sidebar"
                    aria-expanded="true"
                >
                    <Icon name="icon-close" className="icon-xl" />
                </button>
            </div>

            <nav className="flex-col">
                <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? "nav-active-item" : "nav-item"}
                >
                    <Icon name="icon-dashboard"/>  Dashboard
                </NavLink>
                <NavLink
                    to="/inventory"
                    className={({ isActive }) => isActive ? "nav-active-item" : "nav-item"}>
                    <Icon name="icon-inventory" className="icon icon-base" />
                    Inventory Search
                </NavLink>
                <NavLink
                    to="/digikey-search"
                    className={({ isActive }) => isActive ? "nav-active-item" : "nav-item"}>
                    <Icon name="icon-cart" className="icon icon-base" />
                    DigiKey Search
                </NavLink>
            </nav>
        </aside>

    )
}

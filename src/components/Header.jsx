import Icon from "./Icon";

export default function Header() {
    return (
        <header className="row-space-between white-bg">
            <div id="header-left">
                <button id="menu-toggle" className="menu-toggle" aria-label="Open menu">
                    <Icon name="icon-menu" className="icon-xl" />
                </button>
                <form id="global-search-form" role="search" aria-label="Inventory search">
                    <label htmlFor="search-input" className="hidden">
                        Global search
                    </label>
                    <div className="search-container rounded row-vertical-center">
                        <Icon name="icon-search" />
                        <input
                            type="search"
                            id="search-input"
                            name="q"
                            placeholder="Global search..."
                            autoComplete="off"
                        />
                    </div>
                </form>
            </div>
            <div className="header-right row-vertical-center gap-4">
                <button
                    id="notifications"
                    className="icon-button"
                    type="button"
                    aria-label="View notifications"
                >
                    <Icon name="icon-bell" className="icon-lg" />
                    <span className="notification-dot" aria-hidden="true" />
                </button>
                <div className="vertical-divider" aria-hidden="true" />
                <a href="#" id="user" className="flex-center gap-2">
                    <span className="avatar flex-center">
                        <Icon name="icon-user" className="icon-lg" />
                    </span>
                    <span>J. Doe</span>
                </a>
            </div>
        </header>
    )
}

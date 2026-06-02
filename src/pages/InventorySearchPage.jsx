import { useState } from "react";

import PageHeader from "../components/PageHeader";
import InventoryTableRow from "../components/InventoryTableRow";
// data 
import inventoryItems from "../data/inventory.json";
// hooks
import useDebounce from "../hooks/useDebounce";

const INVENTORY_SORT_MODE = Object.freeze({
    RELEVANCE: "relevance",
    QTY_DESC: "qty-desc",
    QTY_ASC: "qty-asc",
    NAME_ASC: "name-asc"
});

export const INVENTORY_SORT_OPTIONS = [
    {
        value: INVENTORY_SORT_MODE.RELEVANCE,
        label: "Relevance"
    },
    {
        value: INVENTORY_SORT_MODE.QTY_DESC,
        label: "Qty: high to low"
    },
    {
        value: INVENTORY_SORT_MODE.QTY_ASC,
        label: "Qty: low to high"
    },
    {
        value: INVENTORY_SORT_MODE.NAME_ASC,
        label: "Name: A-Z"
    }
];


export default function InventorySearchPage() {

    const [searchQuery, setSearchQuery] = useState("");
    const [sortMode, setSortMode] = useState(INVENTORY_SORT_MODE.RELEVANCE);
    const debouncedSearchQuery = useDebounce(searchQuery, 250);
    const normalizedQuery = debouncedSearchQuery.trim().toLowerCase();
    const hasActiveSearch = searchQuery.trim().length > 0;

    function handleClearSearch() {
        setSearchQuery("");
    }

    const filteredItems = inventoryItems.filter(item => {
        const searchableText = [
            item.name,
            item.category,
            item.package,
            ...item.parameters,
            ...item.manufacturers
        ].join(" ").toLowerCase();

        return searchableText.includes(normalizedQuery);
    });

    const sortedItems = [...filteredItems].sort((a, b) => {
        switch (sortMode) {
            case INVENTORY_SORT_MODE.QTY_DESC:
                return b.qty - a.qty;
            case INVENTORY_SORT_MODE.QTY_ASC:
                return a.qty - b.qty;
            case INVENTORY_SORT_MODE.NAME_ASC:
                return a.name.localeCompare(b.name);
            case INVENTORY_SORT_MODE.RELEVANCE:
            default:
                return 0; // keep original order (for relevance order)
        }
    });

    return (
        <>
            <PageHeader
                title="Inventory Search"
                description="Search by MPN, value, package, manufacturer, or natural language"
            />

            <div className="inventory-search-panel rounded white-bg flex-col gap-4">
                <div className="search-container rounded row-vertical-center gap-3">
                    <svg className="icon-xl" aria-hidden="true">
                        <use href="#icon-search" />
                    </svg>
                    <input
                        id="inventory-search-input"
                        type="text"
                        placeholder="Search parts..."
                        value={searchQuery}
                        onChange={event => setSearchQuery(event.target.value)}
                    />
                </div>
                <p className="hint-note">
                    Try: "10k resistor 0402" or "capacitors for 3.3V logic" or "STM32
                    microcontrollers"
                </p>
            </div>

            <section className="inventory-toolbar row-vertical-center wrap gap-4">
                <div className="toolbar-left row-vertical-center wrap gap-4">
                    <button className="btn" type="button">
                        <svg aria-hidden="true">
                            <use href="#icon-filter" />
                        </svg>
                        Filters
                    </button>
                    <div
                        className="toggle row-vertical-center"
                        role="group"
                        aria-label="Toggle inventory view"
                    >
                        <button className="toggle-btn" type="button" data-view="grouped">
                            Grouped
                        </button>
                        <button
                            className="toggle-btn is-active"
                            type="button"
                            data-view="exact"
                        >
                            Exact Lots
                        </button>
                    </div>
                    <span className="results-count" id="results-count">
                        <span id="filtered-results-cnt-placeholder">{filteredItems.length}</span> results
                    </span>
                </div>
                <div className="row-space-between gap-2">
                    <label htmlFor="sort-select" className="text-500 nobr">
                        Sort by:
                    </label>
                    <select
                        id="sort-select"
                        className="form-control"
                        value={sortMode}
                        onChange={event => setSortMode(event.target.value)}
                    >
                        {INVENTORY_SORT_OPTIONS.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>
            </section>
            <section className="row-vertical-center wrap text-sm" id="active-filters">
                <span className="text-500">Active filters:</span>

                <div id="filter-chips-block" className="row-vertical-center">
                    {hasActiveSearch && (
                        <button className="filter-chip" type="button" onClick={handleClearSearch}>
                            Search: {searchQuery}
                            <span className="filter-chip-close">×</span>
                        </button>
                    )}
                </div>

                {hasActiveSearch && (
                    <button
                        id="clear-filters-btn"
                        className="icon-button font-medium"
                        type="button"
                        onClick={handleClearSearch}
                    >
                        Clear all
                    </button>
                )}
            </section>
            <section className="panel">
                <div className="panel-body no-padding">
                    <table className="data-table inventory-table">
                        <thead>
                            <tr>
                                <th>Part</th>
                                <th>Category</th>
                                <th>Package</th>
                                <th>Key Parameters</th>
                                <th>Total Qty</th>
                                <th>Locations</th>
                                <th>Manufacturers</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody id="inventory-table-body" >
                            {sortedItems.length > 0 ? (
                                sortedItems.map(item => (
                                    <InventoryTableRow key={item.id} {...item} />
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={9} className="empty-state-cell">
                                        No parts found. Try another search query.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </section>

        </>
    );
}
import { useState } from "react";
import PageHeader from "../components/PageHeader";

export default function DigiKeySearchPage() {

    const [searchQuery, setSearchQuery] = useState("");

    return (
        <>

            <PageHeader
                title="Digi-Key Search"
                description="Search for electronic components by part number, keyword, or manufacturer"
            />

            <div className="layout-with-sidebar">
                <div className="flex-col gap-3">
                    {/*------------------ SERCH FORM -------------------*/}
                    <section id="digikey-search-panel" className="panel">
                        <div className="panel-header">
                            <h2>Component Search</h2>
                        </div>
                        <div className="panel-body flex-col gap-4">
                            <form
                                id="digikey-search-form"
                                className="panel-body-section flex-col gap-4"
                                action="#"
                                method="get"
                            >
                                <div id="search-query-input-field" className="form-field">
                                    <label htmlFor="component-query-input" className="form-label">
                                        Search Query
                                    </label>
                                    <div className="search-container rounded row-vertical-center gap-3">
                                        <svg className="icon-xl" aria-hidden="true">
                                            <use href="#icon-search" />
                                        </svg>
                                        <input
                                            id="component-query-input"
                                            name="query"
                                            type="text"
                                            placeholder="e.g. STM32F407VGT6, 10k 0402, Murata 0.1uF"
                                            required=""
                                            minLength={2}
                                            autoComplete="off"
                                            aria-describedby="component-query-error"
                                            aria-invalid="false"
                                        />
                                    </div>
                                    <p
                                        id="component-query-error"
                                        className="form-error"
                                        aria-live="polite"
                                        hidden=""
                                    />
                                </div>
                                <div className="grid-4 gap-3">
                                    <div className="form-field">
                                        <label htmlFor="component-qty-input" className="form-label">
                                            Quantity
                                        </label>
                                        <input
                                            id="component-qty-input"
                                            name="quantity"
                                            className="form-control rounded-sm"
                                            type="number"
                                            min={1}
                                            defaultValue={1}
                                        />
                                    </div>
                                    <div className="form-field">
                                        <label htmlFor="component-site-select" className="form-label">
                                            Site
                                        </label>
                                        <select
                                            id="component-site-select"
                                            name="site"
                                            className="form-control rounded-sm"
                                        >
                                            <option value="US" selected="">
                                                United States
                                            </option>
                                            <option value="CA">Canada</option>
                                            <option value="EU">Europe</option>
                                        </select>
                                    </div>
                                    <div className="form-field">
                                        <label
                                            htmlFor="component-language-select"
                                            className="form-label"
                                        >
                                            Language
                                        </label>
                                        <select
                                            id="component-language-select"
                                            name="language"
                                            className="form-control rounded-sm"
                                        >
                                            <option value="en" selected="">
                                                English
                                            </option>
                                            <option value="fr">French</option>
                                        </select>
                                    </div>
                                    <div className="form-field">
                                        <label
                                            htmlFor="component-currency-select"
                                            className="form-label"
                                        >
                                            Currency
                                        </label>
                                        <select
                                            id="component-currency-select"
                                            name="currency"
                                            className="form-control rounded-sm"
                                        >
                                            <option value="USD" selected="">
                                                USD ($)
                                            </option>
                                            <option value="CAD">CAD ($)</option>
                                            <option value="EUR">EUR (€)</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-actions flex-row wrap gap-3">
                                    <button type="submit" className="btn btn-primary">
                                        <svg aria-hidden="true">
                                            <use href="#icon-search" />
                                        </svg>
                                        Search
                                    </button>
                                    <button type="reset" className="btn btn-secondary">
                                        Clear
                                    </button>
                                </div>
                            </form>
                            <p className="hint-note">
                                You can search by part number, supplier number, manufacturer, or
                                keyword.
                            </p>
                        </div>
                    </section>
                    {/* END SEARCH FORM  */}
                    {/*----------- SERCH LOADING SPINNER -------------------*/}
                    <div
                        id="digikey-loading-block"
                        className="info-panel panel-blue panel-body flex-row gap-4"
                        role="status"
                        aria-live="polite"
                        hidden=""
                    >
                        <div className="info-panel-icon waiting_spinner" aria-hidden="true" />
                        <div>
                            <p className="panel-title">Searching Digi-Key API</p>
                            <p className="text-xs">
                                Please wait while we search for "
                                <span id="loading-search-string-value-placeholder" />
                                "...
                            </p>
                        </div>
                    </div>
                    {/*----------- SERCH LOADING ERROR -------------------*/}
                    <div
                        id="digikey-loading-error-block"
                        className="info-panel panel-body flex-row gap-4"
                        hidden=""
                    >
                        <svg className="icon-lg color-red" aria-hidden="true">
                            <use href="#icon-info" />
                        </svg>
                        <div>
                            <p className="panel-title">Search failed</p>
                            <p id="digikey-error-message-placeholder" className="text-sm">
                                Something went wrong.
                            </p>
                        </div>
                    </div>
                    {/*----------- SERCH RESULTS HEADER -------------------*/}
                    <div id="search-result-header" className="flex-col gap-3" hidden="">
                        <div id="search-results-cnt-block" className="flex-row gap-2">
                            <svg className="icon-xl color-green" aria-hidden="true">
                                <use href="#icon-sberbank" />
                            </svg>
                            <p className="font-semibold">
                                <span id="search-results-cnt-value-placeholder">3</span>
                                results found for "
                                <span id="results-search-string-value-placeholder" />"
                            </p>
                        </div>
                        <div
                            id="search-results-filter-block"
                            className="panel panel-body row-space-between wrap text-sm"
                            hidden=""
                        >
                            <div className="row-vertical-center wrap">
                                <span>Filters: </span>
                                <button
                                    className="chip"
                                    type="button"
                                    data-filter-key="Exact match"
                                >
                                    Exact match
                                </button>
                                <button className="chip" type="button" data-filter-key="In stock">
                                    In stock
                                </button>
                                <button
                                    className="filter-chip"
                                    type="button"
                                    data-filter-key="Active products"
                                >
                                    Active products
                                </button>
                            </div>
                            <div className="row-vertical-center">
                                <label htmlFor="sort-select" className="text-500">
                                    <nobr>Sort by:</nobr>
                                </label>
                                <select id="sort-select" className="form-control">
                                    <option value="relevance">Relevance</option>
                                    <option value="availability">Availability</option>
                                    <option value="manufacturer">Manufacturer</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    {/*--------------- SERCH RESULTS CONTAINER ------------------------*/}
                    <div id="digikey-search-results-block" className="flex-col gap-4" />{" "}
                    {/* end search results */}
                </div>
                <aside className="flex-col gap-3">
                    <section className="panel text-sm">
                        <div className="panel-header">
                            <h2>Search Tips</h2>
                        </div>
                        <div className="panel-body flex-col gap-4">
                            <div className="flex-col gap-1">
                                <h3>Part Numbers</h3>
                                <p className="text-500">
                                    Search by exact manufacturer part number for best results.
                                </p>
                                <div className="badge-wide">STM32F407VGT6</div>
                            </div>
                            <div className="flex-col gap-1">
                                <h3>Component Values</h3>
                                <p className="text-500">
                                    Include value and package for passive components.
                                </p>
                                <div className="badge-wide">10k 0402 resistor</div>
                            </div>
                            <div className="flex-col gap-1">
                                <h3>Manufacturers</h3>
                                <p className="text-500">Filter by manufacturer name or prefix.</p>
                                <div className="badge-wide">Murata 0.1uF</div>
                            </div>
                        </div>
                    </section>
                    <section className="panel">
                        <div className="panel-header">
                            <h2>Example Queries</h2>
                        </div>
                        <div className="panel-body flex-col gap-3">
                            <button type="button" className="btn-chip">
                                STM32F407VGT6
                            </button>
                            <button type="button" className="btn-chip">
                                10k 0402
                            </button>
                            <button type="button" className="btn-chip">
                                Murata 0.1uF
                            </button>
                            <button type="button" className="btn-chip">
                                USB-C connector
                            </button>
                        </div>
                    </section>
                </aside>
            </div>
        </>

    );
}
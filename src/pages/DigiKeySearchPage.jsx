import { useActionState } from "react";

import PageHeader from "../components/PageHeader";
import DigiKeySearchForm from "../components/DigiKeySearchForm";
import DigiKeyLoadingBlock from "../components/DigiKeyLoadingBlock";
import DigiKeyErrorBlock from "../components/DigiKeyErrorBlock";
import DigiKeyResultsBlock from "../components/DigiKeyResultsBlock";
import DigiKeyNoResultsBlock from "../components/DigiKeyNoResultsBlock";
import { 
    submitDigiKeySearch, 
    initialDigiKeySearchState 
} from "../actions/digiKeySearchAction";


export default function DigiKeySearchPage() {

    const [searchFormState, searchFormAction, isSearchPending] = useActionState(
        submitDigiKeySearch,
        initialDigiKeySearchState
    );

    return (
        <>
            <PageHeader
                title="Digi-Key Search"
                description="Search for electronic components by part number, keyword, or manufacturer"
            />

            <div className="layout-with-sidebar">
                <div className="flex-col gap-3">
                    {/*------------------ SERCH FORM -------------------*/}
                    <DigiKeySearchForm
                        formAction={searchFormAction}
                        queryError={searchFormState.queryError}
                    />

                    {/*----------- SERCH LOADING SPINNER -------------------*/}

                    {isSearchPending && <DigiKeyLoadingBlock />}

                    {/*----------- SERCH LOADING ERROR -------------------*/}
                    {searchFormState.submitError && !isSearchPending && (
                        <DigiKeyErrorBlock message={searchFormState.submitError} />
                    )}

                    {/*----------- SERCH RESULTS HEADER -------------------*/}
                    {searchFormState.hasSearched &&
                        !isSearchPending &&
                        !searchFormState.queryError &&
                        !searchFormState.submitError &&
                        searchFormState.results.length > 0 && (
                            <DigiKeyResultsBlock
                                query={searchFormState.lastQuery}
                                results={searchFormState.results}
                            />
                        )}

                    {searchFormState.hasSearched &&
                        !isSearchPending &&
                        !searchFormState.queryError &&
                        !searchFormState.submitError &&
                        searchFormState.results.length === 0 && (
                            <DigiKeyNoResultsBlock query={searchFormState.lastQuery} />
                        )}
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
import { useActionState, useRef } from "react";

import PageHeader from "../components/PageHeader";
import DigiKeySearchForm from "../components/DigiKeySearchForm";
import DigiKeyLoadingBlock from "../components/DigiKeyLoadingBlock";
import DigiKeyErrorBlock from "../components/DigiKeyErrorBlock";
import DigiKeyResultsBlock from "../components/DigiKeyResultsBlock";
import DigiKeyNoResultsBlock from "../components/DigiKeyNoResultsBlock";
import DigiKeySearchSidebar from "../components/DigiKeySearchSidebar";

import {
    submitDigiKeySearch,
    initialDigiKeySearchState
} from "../actions/digiKeySearchAction";


export default function DigiKeySearchPage() {

    const [searchFormState, searchFormAction, isSearchPending] = useActionState(
        submitDigiKeySearch,
        initialDigiKeySearchState
    );

    const queryInputRef = useRef(null);

    function handleExampleQueryClick(query) {
        if (!queryInputRef.current) return;

        queryInputRef.current.value = query;
        queryInputRef.current.focus();
    }

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
                        queryInputRef={queryInputRef}
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
                <DigiKeySearchSidebar onExampleQueryClick={handleExampleQueryClick} />
            </div>
        </>

    );
}
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

    const hasQueryError = Boolean(searchFormState.queryError);
    const hasSubmitError = Boolean(searchFormState.submitError);
    const hasResults = searchFormState.results.length > 0;

    const showSubmitError = hasSubmitError && !isSearchPending;

    const showResults =
        searchFormState.hasSearched &&
        !isSearchPending &&
        !hasQueryError &&
        !hasSubmitError &&
        hasResults;

    const showNoResults =
        searchFormState.hasSearched &&
        !isSearchPending &&
        !hasQueryError &&
        !hasSubmitError &&
        !hasResults;

    function handleExampleQueryClick(query) {
        if (!queryInputRef.current) {
            return;
        }

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

                    <DigiKeySearchForm
                        formAction={searchFormAction}
                        queryError={searchFormState.queryError}
                        queryInputRef={queryInputRef}
                    />

                    {isSearchPending && <DigiKeyLoadingBlock />}

                    {showSubmitError && (
                        <DigiKeyErrorBlock message={searchFormState.submitError} />
                    )}

                    {showResults && (
                        <DigiKeyResultsBlock
                            query={searchFormState.lastQuery}
                            results={searchFormState.results}
                        />
                    )}

                    {showNoResults && (
                        <DigiKeyNoResultsBlock query={searchFormState.lastQuery} />
                    )}
                </div>
                <DigiKeySearchSidebar onExampleQueryClick={handleExampleQueryClick} />
            </div>
        </>

    );
}
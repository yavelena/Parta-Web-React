export default function DigiKeyLoadingBlock() {
    return (
        <div
            id="digikey-loading-block"
            className="info-panel panel-blue panel-body flex-row gap-4"
            role="status"
            aria-live="polite"
        >
            <div className="info-panel-icon waiting_spinner" aria-hidden="true" />
            <div>
                <p className="panel-title">Searching Digi-Key API</p>
                <p className="text-xs">
                    Please wait while we search for matching components...
                    <span id="loading-search-string-value-placeholder" />
                    "...
                </p>
            </div>
        </div>
    )
}

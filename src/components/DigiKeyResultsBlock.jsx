import Icon from "./Icon";
import DigiKeyResultCard from "./DigiKeyResultCard";

export default function DigiKeyResultsBlock({ query, results })
{
    return (
        <div className="flex-col gap-3">
            <div id="search-result-header" className="flex-col gap-3">
                <div id="search-results-cnt-block" className="flex-row gap-2">
                    <Icon
                        name="icon-sberbank"
                        className="icon-xl color-green"
                    />

                    <p className="font-semibold">
                        {results.length} results found for "{query}"
                    </p>
                </div>

                <div
                    id="search-results-filter-block"
                    className="panel panel-body row-space-between wrap text-sm"
                >
                    <div className="row-vertical-center wrap">
                        <span>Filters: </span>

                        <button className="chip" type="button">
                            Exact match
                        </button>

                        <button className="chip" type="button">
                            In stock
                        </button>

                        <button className="filter-chip" type="button">
                            Active products
                        </button>
                    </div>

                    <div className="row-vertical-center">
                        <label
                            htmlFor="digikey-sort-select"
                            className="text-500 nowrap"
                        >
                            Sort by:
                        </label>

                        <select
                            id="digikey-sort-select"
                            className="form-control"
                        >
                            <option value="relevance">Relevance</option>
                            <option value="availability">Availability</option>
                            <option value="manufacturer">Manufacturer</option>
                        </select>
                    </div>
                </div>
            </div>

            <div
                id="digikey-search-results-block"
                className="flex-col gap-4"
            >
                {results.map((part, index) => (
                    <DigiKeyResultCard
                        key={`${part.manufacturerProductNumber}-${part.digiKeyProductNumber}-${index}`}
                        part={part}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
}
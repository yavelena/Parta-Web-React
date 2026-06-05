const searchTips = [
    {
        id: "part-numbers",
        title: "Part Numbers",
        description: "Search by exact manufacturer part number for best results.",
        example: "STM32F407VGT6"
    },
    {
        id: "component-values",
        title: "Component Values",
        description: "Include value and package for passive components.",
        example: "10k 0402 resistor"
    },
    {
        id: "manufacturers",
        title: "Manufacturers",
        description: "Filter by manufacturer name or prefix.",
        example: "Murata 0.1uF"
    }
];

const exampleQueries = [
    "STM32F407VGT6",
    "10k 0402",
    "Murata 0.1uF",
    "USB-C connector"
];

function DigiKeySearchTipsPanel()
{
    return (
        <section className="panel text-sm">
            <div className="panel-header">
                <h2>Search Tips</h2>
            </div>

            <div className="panel-body flex-col gap-4">
                {searchTips.map(tip => (
                    <div key={tip.id} className="flex-col gap-1">
                        <h3>{tip.title}</h3>

                        <p className="text-500">
                            {tip.description}
                        </p>

                        <div className="badge-wide">
                            {tip.example}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}


function DigiKeyExampleQueriesPanel({ onExampleQueryClick })
{
    return (
        <section className="panel">
            <div className="panel-header">
                <h2>Example Queries</h2>
            </div>

            <div className="panel-body flex-col gap-3">
                {exampleQueries.map(query => (
                    <button
                        key={query}
                        type="button"
                        className="btn-chip"
                        onClick={() => onExampleQueryClick(query)}
                    >
                        {query}
                    </button>
                ))}
            </div>
        </section>
    );
}

export default function DigiKeySearchSidebar({ onExampleQueryClick })
{
    return (
        <aside className="flex-col gap-3">
            <DigiKeySearchTipsPanel />

            <DigiKeyExampleQueriesPanel
                onExampleQueryClick={onExampleQueryClick}
            />
        </aside>
    );
}
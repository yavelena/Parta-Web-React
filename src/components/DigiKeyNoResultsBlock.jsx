import Icon from "./Icon";

export default function DigiKeyNoResultsBlock({ query })
{
    return (
        <div
            className="info-panel panel-body flex-row gap-4"
            role="status"
        >
            <Icon name="icon-info" className="icon-lg color-blue" />

            <div>
                <p className="panel-title">No components found</p>

                <p className="text-sm">
                    We could not find any Digi-Key components for "{query}".
                    Try a more specific part number or another keyword.
                </p>
            </div>
        </div>
    );
}
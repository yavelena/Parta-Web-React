import Icon from "./Icon";
import DigiKeyExternalLink from "./DigiKeyExternalLink";
import {
    isBestMatch,
    formatQuantity,
    getStatusBadgeClass
} from "../utils/digiKeyFormat";


function DigiKeyResultCardHeader({ part, index }) {
    const bestMatch = isBestMatch(part.matchType);
    const resultNumber = index + 1;

    const title = bestMatch ? "Best Match" : `Result ${resultNumber}`;
    const badgeText = bestMatch ? "Exact Match" : part?.matchType || "Match";
    const badgeClass = bestMatch ? "badge-green" : "badge-blue";

    return (
        <div className="panel-header">
            <div className="row-vertical-center gap-2">
                {bestMatch && (
                    <Icon name="icon-star" className="icon-lg color-blue" />
                )}
                <span className="panel-title">{title}</span>
            </div>

            <span className={badgeClass}>{badgeText}</span>
        </div>
    );

}


export default function DigiKeyResultCard({ part, index }) {
    const partNumber = part.manufacturerProductNumber || "Unknown part number";
    const manufacturer = part.manufacturer || "Unknown manufacturer";
    const description = part.description || "No description";
    const detailedDescription = part.detailedDescription || description;
    const quantityAvailable = formatQuantity(part.quantityAvailable);
    const status = part.productStatus || "Unknown";
    const source = part.source || "DigiKey";

    return (
        <section className="component-card panel">
            <DigiKeyResultCardHeader
                part={part}
                index={index}
            />

            <div className="panel-body flex-col gap-3">
                <div className="panel-body-section row-space-between wrap">
                    <div className="flex-col gap-3">
                        <h3>{partNumber}</h3>

                        <p>{description}</p>

                        <div className="row-vertical-center wrap">
                            <span className="badge-purple">
                                {manufacturer}
                            </span>

                            <span className={getStatusBadgeClass(status)}>
                                {status}
                            </span>
                        </div>
                    </div>

                    <div className="flex-col text-xs text-500">
                        <span>Available</span>

                        <span className="text-xl text-900 font-medium">
                            {quantityAvailable}
                        </span>

                        <span>units in stock</span>
                    </div>
                </div>

                <div className="panel-body-section flex-col gap-3">
                    <p className="panel-title">Product Description</p>
                    <p>{detailedDescription}</p>
                </div>

                <dl className="grid-3 gap-4">
                    <div className="spec-item">
                        <dt>Source</dt>
                        <dd>{source}</dd>
                    </div>

                    <div className="spec-item">
                        <dt>Datasheet</dt>
                        <dd>
                            <DigiKeyExternalLink
                                url={part.datasheetUrl}
                                text="View PDF"
                            />
                        </dd>
                    </div>

                    <div className="spec-item">
                        <dt>Product Page</dt>
                        <dd>
                            <DigiKeyExternalLink
                                url={part.productUrl}
                                text="View on DigiKey"
                            />
                        </dd>
                    </div>
                </dl>
            </div>
        </section>
    );
}
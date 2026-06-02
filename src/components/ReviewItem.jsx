import { getStockStatus } from "../utils/stockStatus";

export default function ReviewItem({
    title,
    location,
    quantity,
    threshold,
    date
}) {
    
    const stockStatus = getStockStatus(quantity, threshold);
    
    return (
        <article className="panel-body-section ">
            <div className="flex-row gap-3">
                <div className="alert" aria-hidden="true" />
                <div className="flex-col gap-2">
                    <p className="text-900">{title}</p>
                    <p className="text-500 text-xs">
                        {location} &nbsp;•&nbsp; {quantity} units
                    </p>
                    <div className="row-vertical-center gap-1">
                        <span className={stockStatus.badgeClass}>{stockStatus.label}</span>
                        <span className="text-500 text-sm">{date}</span>
                    </div>
                </div>
            </div>
        </article>
    )
}

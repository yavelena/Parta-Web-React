export default function SummaryCard({
    title,
    value,
    change,
    changeClass='',
    description
}) {
    return (
        <article className="flex-col gap-3 rounded panel-body">
            <p className="text-sm">{title}</p>
            
            <div className="baseline gap-3">
                <span className="text-2xl text-900 font-semibold">
                    {value}
                </span>
                
                <span className={changeClass}>
                    {change}
                </span>
            </div>

            <p className="text-xs text-500">
                {description}
            </p>
        </article>
    )
}

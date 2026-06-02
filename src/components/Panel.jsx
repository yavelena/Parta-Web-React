export default function Panel({
    title,
    subtitle,
    children,
    bodyClassName = ''
}) {
    return (
        <section className="panel">

            <div className="panel-header">
                <h2>{title}</h2>

                {
                    subtitle &&
                    <span className="text-500">
                        {subtitle}
                    </span>
                }
            </div>

            <div className={`panel-body ${bodyClassName}`}>
                {children}
            </div>

        </section>
    );
}

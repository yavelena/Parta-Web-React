import Icon from "./Icon";

export default function DigiKeyErrorBlock({ message }) {
    return (
        <div
            className="info-panel panel-body flex-row gap-4"
            role="alert"
        >
            <Icon name="icon-info" className="icon-lg color-red" />
            
            <div>
                <p className="panel-title">Search failed</p>
                <p className="text-sm">
                    {message}
                </p>
            </div>
        </div>
    )
}

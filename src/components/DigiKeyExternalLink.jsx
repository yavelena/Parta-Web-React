import Icon from "./Icon";

export default function DigiKeyExternalLink({ url, text }) {
    if (!url) {
        return (
            <span className="text-500">Not available</span>
        );
    }
    return (
        <a
            href={url}
            className="icon-link"
            target="_blank"
            rel="noopener noreferrer"
        >
            <span>{text}</span>
            <Icon name="icon-external-link" className="icon-sm" />
        </a>
    );
}

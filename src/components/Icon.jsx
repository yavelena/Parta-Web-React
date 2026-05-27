export default function Icon({ name, className = "" }) {
    return (
        <svg className={className} aria-hidden="true">
            <use href={`#${name}`}></use>
        </svg>
    )
}

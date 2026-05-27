export default function IconSprite() {
    return (
        <svg className="hidden" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            {/* dashboard */}
            <symbol id="icon-dashboard" viewBox="0 0 24 24">
                <rect x={3} y={3} width={7} height={9} rx={1} />
                <rect x={14} y={3} width={7} height={5} rx={1} />
                <rect x={14} y={12} width={7} height={9} rx={1} />
                <rect x={3} y={16} width={7} height={5} rx={1} />
            </symbol>
            {/* inventory / box */}
            <symbol id="icon-inventory" viewBox="0 0 24 24">
                <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z" />
                <path d="M12 22V12" />
                <polyline points="3.29 7 12 12 20.71 7" />
                <path d="m7.5 4.27 9 5.15" />
            </symbol>
            {/* locations / map pin */}
            <symbol id="icon-locations" viewBox="0 0 24 24">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0" />
                <circle cx={12} cy={10} r={3} />
            </symbol>
            {/* transactions / arrows left-right */}
            <symbol id="icon-transactions" viewBox="0 0 24 24">
                <path d="M17 3h4v4" />
                <path d="M3 21l18-18" />
                <path d="M7 21H3v-4" />
                <path d="M21 3 3 21" />
            </symbol>
            {/* review / square-check */}
            <symbol id="icon-review" viewBox="0 0 24 24">
                <rect x={3} y={3} width={18} height={18} rx={2} />
                <path d="m9 12 2 2 4-4" />
            </symbol>
            {/* reports / file-text */}
            <symbol id="icon-reports" viewBox="0 0 24 24">
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" />
                <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                <path d="M8 13h8" />
                <path d="M8 17h8" />
                <path d="M10 9h1" />
            </symbol>
            {/* admin / settings */}
            <symbol id="icon-admin" viewBox="0 0 24 24">
                <path d="M12 3v3" />
                <path d="M12 18v3" />
                <path d="M3 12h3" />
                <path d="M18 12h3" />
                <path d="m18.36 5.64-2.12 2.12" />
                <path d="m7.76 16.24-2.12 2.12" />
                <path d="m5.64 5.64 2.12 2.12" />
                <path d="m16.24 16.24 2.12 2.12" />
                <circle cx={12} cy={12} r={3} />
            </symbol>
            {/* search */}
            <symbol id="icon-search" viewBox="0 0 24 24">
                <circle cx={11} cy={11} r={8} />
                <path d="m21 21-4.3-4.3" />
            </symbol>
            {/* filter */}
            <symbol id="icon-filter" viewBox="0 0 24 24">
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
            </symbol>
            {/* menu / burger */}
            <symbol id="icon-menu" viewBox="0 0 24 24">
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
            </symbol>
            {/* close / x */}
            <symbol id="icon-close" viewBox="0 0 24 24">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
            </symbol>
            {/* notifications / bell */}
            <symbol id="icon-bell" viewBox="0 0 24 24">
                <path d="M10.268 21a2 2 0 0 0 3.464 0" />
                <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
            </symbol>
            {/* user / profile */}
            <symbol id="icon-user" viewBox="0 0 24 24">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx={12} cy={7} r={4} />
            </symbol>
            {/* shopping cart / DigiKey */}
            <symbol id="icon-cart" viewBox="0 0 24 24">
                <circle cx={8} cy={21} r={1} />
                <circle cx={19} cy={21} r={1} />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </symbol>
            {/* file */}
            <symbol id="icon-file" viewBox="0 0 24 24">
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" />
                <path d="M14 2v4a2 2 0 0 0 2 2h4" />
            </symbol>
            {/* info */}
            <symbol id="icon-info" viewBox="0 0 24 24">
                <circle cx={12} cy={12} r={10} />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
            </symbol>
            {/* external link */}
            <symbol id="icon-external-link" viewBox="0 0 24 24">
                <path d="M15 3h6v6" />
                <path d="M10 14 21 3" />
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            </symbol>
            {/* star */}
            <symbol id="icon-star" viewBox="0 0 24 24">
                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
            </symbol>
        </svg>

    )
}

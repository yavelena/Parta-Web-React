
const MOVEMENT_BADGE_MAP = {
    consume: "blue",
    receive: "green",
    move: "purple",
    adjust: "gray"
};

export function getMovementBadgeClass(type) {
    return MOVEMENT_BADGE_MAP[type?.toLowerCase?.()] || "gray";
}


export function getQuantityClass(quantity) {
    if (quantity > 0) return "color-green";
    if (quantity < 0) return "color-red";
    return "text-500";
}

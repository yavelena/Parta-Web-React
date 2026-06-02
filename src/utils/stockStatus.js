const TOCK_STATUS = {
    NONE: { label: "None", badgeClass: "badge-none" },
    CRITICAL: { label: "Critical", badgeClass: "badge-critical" },
    LOW: { label: "Low", badgeClass: "badge-low" },
    IN_STOCK: { label: "In Stock", badgeClass: "badge-green" }
};

export function getStockStatus(stock, threshold) {

    if (
        !Number.isFinite(stock) ||
        !Number.isFinite(threshold) ||
        stock <= 0 ||
        threshold <= 0
    ) return TOCK_STATUS.NONE;

    const criticalLevel = threshold * 0.25;

    if (stock === 0)
        return TOCK_STATUS.NONE;

    if (stock < criticalLevel)
        return TOCK_STATUS.CRITICAL;

    if (stock < threshold)
        return TOCK_STATUS.LOW;

    return TOCK_STATUS.IN_STOCK;
}

export function getStockStatusByLabel(label) {
    return Object.values(TOCK_STATUS).find(status => status.label === label) || TOCK_STATUS.NONE;
}

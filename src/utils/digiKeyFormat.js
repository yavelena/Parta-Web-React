export function formatQuantity(quantity)
{
    return Number(quantity || 0).toLocaleString();
}

export function getStatusBadgeClass(status)
{
    return String(status).trim().toLowerCase() === "active"
        ? "badge-green"
        : "badge-red";
}

export function isBestMatch(matchType)
{
    return String(matchType || "").toLowerCase() === "best";
}

export function normalizeDigiKeyResults(data)
{
    if (Array.isArray(data))
    {
        return data;
    }

    if (data)
    {
        return [data];
    }

    return [];
}
const DIGIKEY_API_URL = "https://parta-a2degda9hxbvaydu.canadaeast-01.azurewebsites.net/api/Parts/search";

function normalizeDigiKeyResult(rawResult) {
    return Array.isArray(rawResult)
        ? rawResult
        : rawResult != null
            ? [rawResult]
            : [];
}

export async function searchDigiKeyParts(payload) {

    const response = await fetch(DIGIKEY_API_URL, {
        method: "POST",
        headers:
        {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify( payload )
    });

    if (response.status === 404) {
        return [];
    }

    if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();

    return normalizeDigiKeyResult(data);
}
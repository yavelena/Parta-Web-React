// import { mockDigiKeyResults } from "../data/mockDigiKeyResults";
import { searchDigiKeyParts } from "../services/digiKeyApi";

export const initialDigiKeySearchState = {
    queryError: "",
    submitError: "",
    results: [],
    lastQuery: "",
    hasSearched: false
};

export async function submitDigiKeySearch(previousState, formData) {

    // console.log(formData.get("query"));

    const intent = String(formData.get("intent") || "search");
    if (intent === "clear") {
        return initialDigiKeySearchState;
    }

    const query = String(formData.get("query") ?? "").trim();

    const baseState = {
        ...previousState,
        queryError: "",
        submitError: "",
        results: [],
        lastQuery: query,
        hasSearched: true
    };

    // VALIDATION 

    if (!query) {
        return {
            ...baseState,
            queryError: "Please enter a search query",
            lastQuery: "",
            hasSearched: false
        }
    }

    if (query.length < 2) {
        return {
            ...baseState,
            queryError: "Search query must be at least 2 characters",
        }
    }

    try {
        /* 
        // MOCK SEARCH
        await new Promise(resolve => setTimeout(resolve, 2000)); // simulate network delay
        return {
            ...baseState,
            results: mockDigiKeyResults
        }
        // throw new Error("Simulated search error"); // simulate an error
        */
        const payload = {
            query,
            quantity: Number(formData.get("quantity")) || 1,
            site: String(formData.get("site") || "US"),
            language: String(formData.get("language") || "en"),
            currency: String(formData.get("currency") || "USD")
        };

        const results = await searchDigiKeyParts(payload);

        return {
            ...baseState,
            results
        }
    } catch (error) {
        return {
            ...baseState,
            submitError: error.message || "An error occurred while searching. Please try again."
        }
    }
}

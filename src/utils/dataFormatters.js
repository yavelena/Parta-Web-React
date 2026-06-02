
/**
 * Formats a numeric value as a localized string using the 'en-US' locale.
 * If the provided value cannot be converted to a finite number,
 * returns 'N/A'.
 *
 * @param {number|string} value - The value to format. Can be a number or a numeric string.
 * @returns {string} Formatted number string (e.g., "1,234") or 'N/A' for invalid input.
 */

export function formatQuantity(value) {
    const number = Number(value);

    if (!Number.isFinite(number)) {
        return 'N/A';
    }

    return new Intl.NumberFormat('en-US').format(number);
}



/**
 * Formats a number with an explicit sign.
 * Positive values are prefixed with "+", negative and zero values
 * are returned as-is.
 *
 * @param {number} quantity - The number to format.
 * @returns {string} Signed string representation (e.g., "+10", "-5", "0").
 */

export function formatSignedQuantity(quantity) {
    return (quantity > 0) ? `+${quantity}` : String(quantity);
}
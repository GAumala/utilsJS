/**
 * Methods for arrays
 * @module "@gaumala/array"
 */

/**
 * Removes duplicate items from an array like if it was a {@link
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set|Set}
 * @param {Array} array - input array
 * @returns {Array} a new array without duplicates
 */
export const removeDuplicates = (array) => [...new Set(array)];

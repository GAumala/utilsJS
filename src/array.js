/**
 * Methods for arrays
 * @module @gaumala/utils/array
 */

/**
 * Removes duplicate items from an array like if it was a {@link
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set|Set}
 * @function removeDuplicates
 * @param {Array} array - input array
 * @returns {Array} a new array without duplicates
 */
const removeDuplicates = (array) => [...new Set(array)];

module.exports = { removeDuplicates };

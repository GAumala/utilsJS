/**
 * Methods for objects
 * @module @gaumala/utils/object
 */

/**
 * Renames an object's keys
 * @function renameKeys
 * @param {object} obj - the original object
 * @param {object} newKeys - a dictionary of the renaming
 * (original key -> new key).
 * @returns a new object with the renamed keys
 * @example
 * // returns { 'a': 1, 'e': 2, 'f': 3 }
 * renameKeys({ 'a': 1, 'b': 2, 'c': 3 }, { 'b': 'e', 'c': 'f' });
 */
const renameKeys = (obj, newKeys) => {
  const keyValues = Object.keys(obj).map((key) => {
    const newKey = newKeys[key] || key;
    return { [newKey]: obj[key] };
  });
  return Object.assign({}, ...keyValues);
};

/**
 * Renames keys from an object
 * @function removeKeys
 * @param {object} obj - the original object
 * @param {...string} keyToRemove - a key to remove
 * @returns a new object without the specified keys.
 * @example
 * // returns { 'a': 1  }
 * removeKeys({ 'a': 1, 'b': 2, 'c': 3 }, 'b', 'c');
 */
const removeKeys = (obj, ...keysToRemove) =>
  Object.keys(obj)
    .filter((key) => !keysToRemove.includes(key))
    .reduce((res, key) => {
      res[key] = obj[key];
      return res;
    }, {});

/**
 * Parses keys that containg a value with an integer string
 * @function parseIntKeys
 * @param {object} obj - the original object
 * @param {...string} intKey - a key that has an integer value associated.
 * @returns a new object in which the specifed keys now have number values.
 * @example
 * // returns { 'a': 1, 'b': 'x' }
 * parseIntKeys({ 'a': '1', 'b': 'x' }, 'a');
 */
const parseIntKeys = (obj, ...intKeys) => {
  const keyValues = Object.keys(obj).map((key) => {
    const value = intKeys.includes(key) ? parseInt(obj[key]) : obj[key];
    return { [key]: value };
  });
  return Object.assign({}, ...keyValues);
};

/**
 * checks if a value is of type object and is not null
 * @function isValidObject
 * @param obj - any value
 * @returns {boolean} true if the vaue is of type object and is not null.
 * Otherwise returns false.
 */
const isValidObject = (obj) => typeof obj === "object" && obj !== null;

module.exports = { isValidObject, parseIntKeys, removeKeys, renameKeys };

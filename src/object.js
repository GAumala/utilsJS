/**
 * Methods for objects
 * @module @gaumala/utils/object
 */

/**
 * Renames an object's keys
 * @function renameKeys
 * @param {Object} obj - the original object
 * @param {Object} newKeys - a dictionary of the renaming
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
 * @param {Object} obj - the original object
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
 * @param {Object} obj - the original object
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
 * @param {*} obj - any value
 * @returns {boolean} true if the vaue is of type object and is not null.
 * Otherwise returns false.
 */
const isValidObject = (obj) => typeof obj === "object" && obj !== null;

/**
 * Checks deep equality between two objects comparing every key that has
 * primitive values or objects. Functions are ignored, but if a key in the
 * first object does have a function value, then the second object must
 * also have a function value in that key for them to be equal.
 * @param {object} obj1 - An object
 * @param {object} obj2 - An object
 * @returns {boolean} true if both objects have the same contents.
 */
const areObjectsEqual = (obj1, obj2) => {
  if (typeof obj1 !== "object" || typeof obj2 !== "object") {
    return false;
  }

  if (obj1 === null) {
    return obj2 === null;
  }

  if (obj2 === null) {
    return obj1 === null;
  }

  const keys = Object.keys(obj1);
  if (keys.length !== Object.keys(obj2).length) {
    return false;
  }

  for (let i = 0; i < keys.length; i++) {
    const k = keys[i];
    const attr1 = obj1[k];
    const attr2 = obj2[k];

    const type1 = typeof attr1;
    const type2 = typeof attr2;

    if (type1 !== type2) {
      return false;
    }

    if (type1 === "number" || type1 === "boolean" || type1 === "string") {
      if (attr1 !== attr2) {
        return false;
      }
    }

    if (type1 === "object") {
      if (!areObjectsEqual(attr1, attr2)) {
        return false;
      }
    }
  }

  return true;
};

module.exports = {
  areObjectsEqual,
  isValidObject,
  parseIntKeys,
  removeKeys,
  renameKeys,
};

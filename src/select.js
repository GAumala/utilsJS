/**
 * Functions that select data from an array.
 *
 * The original idea of this module was to is to use these functions in SQL
 * query callbacks where the result is an array of columns, but we are
 * only interested in a subset of all the data.
 * @module @gaumala/utils/select
 */

/**
 * Select the first element of an array
 * @function selectFirst
 * @param {Array} array - input array
 * @returns {*} The first element of the array, or undefined if the aray is
 * empty.
 */
const selectFirst = ([firstResult]) => firstResult;

/**
 * Select and parse the JSON value in the first object of an array
 * @function selectFirstWithJSONColumn
 * @param {string} [column=json] - name of the key with the JSON value.
 * @returns {function(Array): Object} a function that takes an array and
 * returns the parsed object of the JSON value specified by column. The
 * function returns undefined if the  array is empty or there is no value for
 * column in the first element.
 */
const selectFirstWithJSONColumn =
  (column = "json") =>
  ([firstResult]) => {
    if (firstResult && firstResult[column]) {
      return { ...firstResult, [column]: JSON.parse(firstResult[column]) };
    }
    return firstResult;
  };

/**
 * Select a value in the first object of the array
 * @function selectFirstWithJSONColumn
 * @param {string} column - name of the key whose value should be selected.
 * @returns {function(Array<Object>):*} a function that takes an array of
 * objects and returns the value of column in the first element. The function
 * returns undefined if the array is empty or there is no value for column
 * in the first element.
 */
const selectColumnInFirstRow =
  (columnName) =>
  ([firstResult]) =>
    firstResult && firstResult[columnName];

module.exports = {
  selectFirst,
  selectFirstWithJSONColumn,
  selectColumnInFirstRow,
};

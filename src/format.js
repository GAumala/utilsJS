/**
 * Methods for formatting different kind of values
 * @module @gaumala/utils/format
 */

/**
 * formats a number of cents into a string with a dollar amount
 * @function formatCents
 * @param {number} cents - An integer with a number
 * of dollar cents
 * @returns A string with the cents number converted to dollar
 * @example
 * // returns "$0.99"
 * formatCents(99)
 * @example
 * // returns "$5.00"
 * formatCents(500)
 */
const formatCents = (cents) => {
  if (cents === 0) return "$ 0";
  const digits = cents.toString().split("");
  if (digits.length === 1) {
    return "$0.0" + digits[0];
  }
  if (digits.length === 2) {
    return "$0." + digits[0] + digits[1];
  }

  digits.splice(digits.length - 2, 0, ".");
  return "$" + digits.join("");
};

module.exports = { formatCents };

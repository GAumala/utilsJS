const path = require("node:path");
/**
 * Methods for working with file paths
 * @module @gaumala/utils/path
 */

/**
 * Checks if a path is a parent directory of another path.
 * Useful to validate paths input by users, so that they
 * can only access files inside a specified directory.
 * @function isParentDir
 * @param {string} dir An absoulte path of a directory
 * @param {string} file An absolute path of a directory or file
 * @returns {boolean} `true` if `dir` is a parent of `file`.
 */
const isParentDir = (dir, file) => {
  const relativePath = path.relative(dir, file);
  if (relativePath.startsWith("..")) {
    return false;
  }
  return true;
};

module.exports = { isParentDir };

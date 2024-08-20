/**
 * Methods for dealing with time
 * @module @gaumala/utils/time
 */

/**
 * Returns current {@link https://en.wikipedia.org/wiki/Unix_time|unix time}
 * @function unixTime
 * @returns {number} The system's current unix time
 */
const unixTime = () => Math.floor(Date.now() / 1000);

module.exports = { unixTime };

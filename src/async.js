/**
 * Methods for async functions
 * @module @gaumala/utils/async
 */

/**
 * Sleeps for a determined amount of time
 * @function sleep
 * @param {number} ms - time in miliseconds to sleep
 * @param {AbortSignal} signal - An optional {@link
 * https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal|AbortSignal}
 * object that you can pass if you'd like to abort the sleep operation. If
 * you do abort the operation, this method will try to resolve as soon as
 * possible instead of waiting for the specified time.
 * @returns {Promise} A Promise that resolves after the specified time
 * has passed. It does not reject.
 */
export const sleep = (ms, signal) =>
  new Promise((resolve) => {
    const timeoutId = setTimeout(resolve, ms);
    if (signal) {
      signal.addEventListener("abort", () => {
        clearTimeout(timeoutId);
        resolve();
      });
    }
  });

/**
 * Promisified {@linkcode
 * https://nodejs.org/en/learn/asynchronous-work/understanding-processnexttick|process.untilNextTick()}
 * @function untilNextTick
 * @returns {Promise} A promise that returns after the next event loop tick.
 * It cannot reject.
 */
export const untilNextTick = () =>
  new Promise((resolve) => {
    process.setNextTick(() => resolve());
  });

/**
 * Methods for {@link https://nodejs.org/api/stream.html|streams}
 * @module @gaumala/utils/stream
 */

/**
 * Consumes a stream completely and returns its contents as a single string.
 * @function streamToString
 * @param {Stream} stream a readable stream containing utf8 text.
 * @returns {Promise<string>} A promise that resolves to a string if the stream is consumed
 * successfully. If an error is thrown while reading data, the promise
 * rejects with the error.
 */
const streamToString = (stream) => {
  const chunks = [];
  return new Promise((resolve, reject) => {
    stream.on("data", (chunk) => chunks.push(Buffer.from(chunk)));
    stream.on("error", (err) => reject(err));
    stream.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
  });
};

module.exports = { streamToString };

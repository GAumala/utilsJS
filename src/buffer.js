/**
 * Methods for {@link https://nodejs.org/api/buffer.html|buffers}
 * @module @gaumala/utils/buffer
 */
import { Buffer } from "node:buffer";

/**
 * Serializes an object to a buffer
 * @function serializeToBuffer
 * @param {object} obj - Object to serialize.
 * @returns {Buffer} a buffer with the contents of the object. You
 * can get the original object back with {@link
 * module:@gaumala/utils/buffer~deserializeFromBuffer|deserializeFromBuffer}
 */
export const serializeToBuffer = (obj) =>
  Buffer.from(JSON.stringify(obj), "utf8");

/**
 * Deserializes an object from buffer
 * @function deserializeFromBuffer
 * @param {Buffer} buf - Buffer that you got from {@link
 * module:@gaumala/utils/buffer~serializeToBuffer|serializeToBuffer}
 * @returns {object} The original object contained in the buffer
 */
export const deserializeFromBuffer = (buf) => JSON.parse(buf.toString("utf8"));

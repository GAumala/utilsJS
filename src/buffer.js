import { Buffer } from "node:buffer";

export const serializeToBuffer = (obj) =>
  Buffer.from(JSON.stringify(obj), "utf8");
export const deserializeFromBuffer = (buf) => JSON.parse(buf.toString("utf8"));

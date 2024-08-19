import fs from "node:fs";
import { Readable } from "node:stream";
import { finished } from "node:stream/promises";

export const downloadFile = async (url, path) => {
  const res = await fetch(url);
  const fileStream = fs.createWriteStream(path);
  return finished(Readable.fromWeb(res.body).pipe(fileStream))
    .then(() => true)
    .catch((err) => {
      if (process.env.MONITOR) {
        console.error("failed to download file", url, path, err);
      }
      return false;
    });
};

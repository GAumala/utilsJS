import * as path from "node:path";
import { fileURLToPath } from "node:url";
import { cp, copyFile, readFile, rm, writeFile } from "node:fs/promises";
import { spawn } from "node:child_process";

import { removeKeys } from "./src/object.js";

const writeJsonFile = (filepath, obj) =>
  writeFile(filepath, JSON.stringify(obj, null, 4));

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.join(__dirname, "dist");
const srcPath = path.join(__dirname, "src");

const createDistPackageJson = async () => {
  const packageText = await readFile(path.join(__dirname, "package.json"));
  const packageJson = JSON.parse(packageText);
  return removeKeys(packageJson, "scripts", "devDependencies");
};

const run = async () => {
  // delete dist/ dir
  await rm(distPath, { recursive: true, force: true });

  // copy src/ into dist/
  await cp(srcPath, distPath, { recursive: true });

  // copy .npmignore
  await copyFile(
    path.join(__dirname, ".npmignore"),
    path.join(distPath, ".npmignore"),
  );

  // write new package json in dist/
  const packageJson = await createDistPackageJson();
  await writeJsonFile(path.join(distPath, "package.json"), packageJson);
};

run()
  .then(() => "Success!")
  .catch((err) => console.error("failed with ", err));

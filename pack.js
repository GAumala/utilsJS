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

const createTarball = (tarName) =>
  new Promise((resolve, reject) => {
    const tarPath = path.join(__dirname, tarName + ".tar.gz");
    const proc = spawn("tar", ["cf", tarPath, "."], { cwd: distPath });
    proc.on("close", (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`tar exited with code ${code}`));
      }
    });
  });

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

  return createTarball("utils");
};

run()
  .then(() => "Success!")
  .catch((err) => console.error("failed with ", err));

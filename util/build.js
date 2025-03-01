import { readFileSync, writeFileSync, mkdirSync, cpSync} from "fs";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const path = dirname(dirname(fileURLToPath(import.meta.url)));
mkdirSync(`${path}/dist`, {recursive: true, force: true});

let indexContent = readFileSync(`${path}/src/index.html`, "utf-8")
    .replace(`"ogcourier.woff2"`, `data:font/woff2;base64,${readFileSync(`${path}/src/ogcourier.woff2`).toString("base64")}`)
    .replace(`"basilisk.gif"`, `data:image/gif;base64,${readFileSync(`${path}/src/basilisk.gif`).toString("base64")}`)
    .replace(`"favicon.png"`, `data:image/png;base64,${readFileSync(`${path}/src/favicon.png`).toString("base64")}`)
    .replace(`"cursor.webp"`, `data:image/gif;base64,${readFileSync(`${path}/src/cursor.webp`).toString("base64")}`)
    .replace(`"mask.png"`, `data:image/gif;base64,${readFileSync(`${path}/src/mask.png`).toString("base64")}`);
writeFileSync(`${path}/dist/index.html`, indexContent, {recursive: true, force: true});

let submissionsContent = readFileSync(`${path}/src/submissions.html`, "utf-8")
    .replace(`"ogcourier.woff2"`, `data:font/woff2;base64,${readFileSync(`${path}/src/ogcourier.woff2`).toString("base64")}`)
    .replace(`<script src="sqlite3.js"></script>`, `<script>${readFileSync(`${path}/src/sqlite3.js`, "utf-8")}</script>`)
    .replace(`"favicon.png"`, `data:image/png;base64,${readFileSync(`${path}/src/favicon.png`).toString("base64")}`);
writeFileSync(`${path}/dist/submissions.html`, submissionsContent, {recursive: true, force: true});

cpSync(`${path}/src/basilisk.blend.zip`, `${path}/dist/basilisk.blend.zip`, {recursive: true, force: true});
cpSync(`${path}/src/sqlite3.wasm`, `${path}/dist/sqlite3.wasm`, {recursive: true, force: true});
cpSync(`${path}/src/robots.txt`, `${path}/dist/robots.txt`, {recursive: true, force: true});
cpSync(`${path}/src/server.js`, `${path}/dist/server.js`, {recursive: true, force: true});

console.log("build completed");

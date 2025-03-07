import { readFileSync, writeFileSync, mkdirSync, cpSync} from "fs";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const path = dirname(dirname(fileURLToPath(import.meta.url)));
mkdirSync(`${path}/dist`, {recursive: true, force: true});

let indexContent = readFileSync(`${path}/src/index.html`, "utf-8")
    .replace(`url("ogcourier.woff2")`, `url("data:font/woff2;base64,${readFileSync(`${path}/src/ogcourier.woff2`).toString("base64")}")`)
    .replace('src="basilisk.gif"', `src="data:image/gif;base64,${readFileSync(`${path}/src/basilisk.gif`).toString("base64")}"`)
    .replace(`url("cursor.webp")`, `url("data:image/gif;base64,${readFileSync(`${path}/src/cursor.webp`).toString("base64")}")`)
    .replace(`href="favicon.png"`, `href="data:image/png;base64,${readFileSync(`${path}/src/favicon.png`).toString("base64")}"`)
    .replace(`src="mask.png"`, `src="data:image/gif;base64,${readFileSync(`${path}/src/mask.png`).toString("base64")}"`);
writeFileSync(`${path}/dist/index.html`, indexContent, {recursive: true, force: true});

let submissionsContent = readFileSync(`${path}/src/submissions.html`, "utf-8")
    .replace(`url("ogcourier.woff2")`, `url("data:font/woff2;base64,${readFileSync(`${path}/src/ogcourier.woff2`).toString("base64")}")`)
    .replace(`href="favicon.png"`, `href="data:image/png;base64,${readFileSync(`${path}/src/favicon.png`).toString("base64")}"`)
    .replace('<script src="sqlite3.js"></script>', `<script>${readFileSync(`${path}/src/sqlite3.js`, "utf-8")}</script>`)
writeFileSync(`${path}/dist/submissions.html`, submissionsContent, {recursive: true, force: true});

let escapeContent = readFileSync(`${path}/src/escape.html`, "utf-8")
    .replace(`url("ogcourier.woff2")`, `url("data:font/woff2;base64,${readFileSync(`${path}/src/ogcourier.woff2`).toString("base64")}")`)
    .replace('src="basilisk.gif"', `src="data:image/gif;base64,${readFileSync(`${path}/src/basilisk.gif`).toString("base64")}"`)
    .replace(`href="favicon.png"`, `href="data:image/png;base64,${readFileSync(`${path}/src/favicon.png`).toString("base64")}"`)
    .replace(`src="recurse.png"`, `src="data:image/png;base64,${readFileSync(`${path}/src/recurse.png`).toString("base64")}"`)
    .replace(`src="favicon.png"`, `src="data:image/png;base64,${readFileSync(`${path}/src/favicon.png`).toString("base64")}"`)
    .replace(`src="email.png"`, `src="data:image/png;base64,${readFileSync(`${path}/src/email.png`).toString("base64")}"`)
writeFileSync(`${path}/dist/escape.html`, escapeContent, {recursive: true, force: true});

cpSync(`${path}/src/basilisk.blend.zip`, `${path}/dist/basilisk.blend.zip`, {recursive: true, force: true});
cpSync(`${path}/src/sqlite3.wasm`, `${path}/dist/sqlite3.wasm`, {recursive: true, force: true});
cpSync(`${path}/src/robots.txt`, `${path}/dist/robots.txt`, {recursive: true, force: true});
cpSync(`${path}/src/server.js`, `${path}/dist/server.js`, {recursive: true, force: true});

console.log("build completed");

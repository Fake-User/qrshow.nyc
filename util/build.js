import { readFileSync, writeFileSync, mkdirSync, cpSync} from "fs";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const path = dirname(dirname(fileURLToPath(import.meta.url)));
mkdirSync(`${path}/dist`, {recursive: true, force: true});

let indexContent = readFileSync(`${path}/src/index.html`, "utf-8")
    .replace('src="retrospective.gif"', `src="data:image/gif;base64,${readFileSync(`${path}/src/retrospective.gif`).toString("base64")}"`)
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
    .replace('src="computer.gif"', `src="data:image/gif;base64,${readFileSync(`${path}/src/computer.gif`).toString("base64")}"`)
    .replace(`href="favicon.png"`, `href="data:image/png;base64,${readFileSync(`${path}/src/favicon.png`).toString("base64")}"`)
    .replace(`src="recurse.png"`, `src="data:image/png;base64,${readFileSync(`${path}/src/recurse.png`).toString("base64")}"`)
    .replace(`src="favicon.png"`, `src="data:image/png;base64,${readFileSync(`${path}/src/favicon.png`).toString("base64")}"`)
    .replace(`src="email.png"`, `src="data:image/png;base64,${readFileSync(`${path}/src/email.png`).toString("base64")}"`)
writeFileSync(`${path}/dist/escape.html`, escapeContent, {recursive: true, force: true});

let trifectaContent = readFileSync(`${path}/src/trifecta.html`, "utf-8")
    .replace(`url("ogcourier.woff2")`, `url("data:font/woff2;base64,${readFileSync(`${path}/src/ogcourier.woff2`).toString("base64")}")`)
    .replace(`href="favicon.png"`, `href="data:image/png;base64,${readFileSync(`${path}/src/favicon.png`).toString("base64")}"`)
    .replace('src="circle.gif"', `src="data:image/gif;base64,${readFileSync(`${path}/src/circle.gif`).toString("base64")}"`)
    .replace('src="spine-3.gif"', `src="data:image/gif;base64,${readFileSync(`${path}/src/spine-3.gif`).toString("base64")}"`)
    .replace('src="spine-4.gif"', `src="data:image/gif;base64,${readFileSync(`${path}/src/spine-4.gif`).toString("base64")}"`)
    .replace('src="spine-5.gif"', `src="data:image/gif;base64,${readFileSync(`${path}/src/spine-5.gif`).toString("base64")}"`)
writeFileSync(`${path}/dist/trifecta.html`, trifectaContent, {recursive: true, force: true});

let finaleContent = readFileSync(`${path}/src/finale.html`, "utf-8")
    .replace(`url("ogcourier.woff2")`, `url("data:font/woff2;base64,${readFileSync(`${path}/src/ogcourier.woff2`).toString("base64")}")`)
    .replace(`href="favicon.png"`, `href="data:image/png;base64,${readFileSync(`${path}/src/favicon.png`).toString("base64")}"`)
    .replace('src="basilisk.gif"', `src="data:image/gif;base64,${readFileSync(`${path}/src/basilisk.gif`).toString("base64")}"`)
writeFileSync(`${path}/dist/finale.html`, finaleContent, {recursive: true, force: true});

let aloneContent = readFileSync(`${path}/src/alone.html`, "utf-8")
    .replace(`url("ogcourier.woff2")`, `url("data:font/woff2;base64,${readFileSync(`${path}/src/ogcourier.woff2`).toString("base64")}")`)
    .replace(`href="favicon.png"`, `href="data:image/png;base64,${readFileSync(`${path}/src/favicon.png`).toString("base64")}"`)
writeFileSync(`${path}/dist/alone.html`, aloneContent, {recursive: true, force: true});

cpSync(`${path}/src/cube-f4dbdc79c695.gif`, `${path}/dist/cube-f4dbdc79c695.gif`, {recursive: true, force: true});
cpSync(`${path}/src/basilisk.blend.zip`, `${path}/dist/basilisk.blend.zip`, {recursive: true, force: true});
cpSync(`${path}/src/sqlite3.wasm`, `${path}/dist/sqlite3.wasm`, {recursive: true, force: true});
cpSync(`${path}/src/robots.txt`, `${path}/dist/robots.txt`, {recursive: true, force: true});
cpSync(`${path}/src/db.sqlite`, `${path}/dist/db.sqlite`, {recursive: true, force: true});
cpSync(`${path}/src/server.js`, `${path}/dist/server.js`, {recursive: true, force: true});

console.log("build completed");

import { readFileSync, writeFileSync, mkdirSync, cpSync} from "fs";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const path = dirname(dirname(fileURLToPath(import.meta.url)));
mkdirSync(`${path}/dist`, {recursive: true, force: true});

let indexContent = readFileSync(`${path}/src/index.html`, "utf-8")
    .replace('src="/assets/retrospective.gif"', `src="data:image/gif;base64,${readFileSync(`${path}/src/assets/retrospective.gif`).toString("base64")}"`)
    .replace(`url("/assets/ogcourier.woff2")`, `url("data:font/woff2;base64,${readFileSync(`${path}/src/assets/ogcourier.woff2`).toString("base64")}")`)
    .replace('src="/assets/basilisk.gif"', `src="data:image/gif;base64,${readFileSync(`${path}/src/assets/basilisk.gif`).toString("base64")}"`)
    .replace(`url("/assets/cursor.webp")`, `url("data:image/gif;base64,${readFileSync(`${path}/src/assets/cursor.webp`).toString("base64")}")`)
    .replace(`href="/assets/favicon.png"`, `href="data:image/png;base64,${readFileSync(`${path}/src/assets/favicon.png`).toString("base64")}"`)
    .replace(`src="/assets/mask.png"`, `src="data:image/gif;base64,${readFileSync(`${path}/src/assets/mask.png`).toString("base64")}"`);
writeFileSync(`${path}/dist/index.html`, indexContent, {recursive: true, force: true});

let retrospectiveContent = readFileSync(`${path}/src/retrospective.html`, "utf-8")
    .replace(`/assets/autonomous-response.png`, `data:image/png;base64,${readFileSync(`${path}/src/assets/autonomous-response.png`).toString("base64")}`)
    .replace(`url("/assets/ogcourier.woff2")`, `url("data:font/woff2;base64,${readFileSync(`${path}/src/assets/ogcourier.woff2`).toString("base64")}")`)
    .replace(`/assets/balanced-breakfast.png`, `data:image/png;base64,${readFileSync(`${path}/src/assets/balanced-breakfast.png`).toString("base64")}`)
    .replace(`/assets/quasi-recursion.png`, `data:image/png;base64,${readFileSync(`${path}/src/assets/quasi-recursion.png`).toString("base64")}`)
    .replace(`href="/assets/favicon.png"`, `href="data:image/png;base64,${readFileSync(`${path}/src/assets/favicon.png`).toString("base64")}"`)
    .replace(`/assets/receipt-loom.png`, `data:image/png;base64,${readFileSync(`${path}/src/assets/receipt-loom.png`).toString("base64")}`)
    .replace(`/assets/qr-tortilla.png`, `data:image/png;base64,${readFileSync(`${path}/src/assets/qr-tortilla.png`).toString("base64")}`)
    .replace(`/assets/god-encoder.png`, `data:image/png;base64,${readFileSync(`${path}/src/assets/god-encoder.png`).toString("base64")}`)
    .replace(`/assets/qrspectives.png`, `data:image/png;base64,${readFileSync(`${path}/src/assets/qrspectives.png`).toString("base64")}`)
    .replace(`/assets/anaqronism.png`, `data:image/png;base64,${readFileSync(`${path}/src/assets/anaqronism.png`).toString("base64")}`)
    .replace(`/assets/between-us.png`, `data:image/png;base64,${readFileSync(`${path}/src/assets/between-us.png`).toString("base64")}`)
    .replace('/assets/ogbasilisk.gif', `data:image/gif;base64,${readFileSync(`${path}/src/assets/ogbasilisk.gif`).toString("base64")}`)
    .replace(`/assets/sol-lewitt.png`, `data:image/png;base64,${readFileSync(`${path}/src/assets/sol-lewitt.png`).toString("base64")}`)
    .replace(`/assets/unscanable.png`, `data:image/png;base64,${readFileSync(`${path}/src/assets/unscanable.png`).toString("base64")}`)
    .replace(`/assets/qr-trivia.png`, `data:image/png;base64,${readFileSync(`${path}/src/assets/qr-trivia.png`).toString("base64")}`)
    .replace(`/assets/guestbook.png`, `data:image/png;base64,${readFileSync(`${path}/src/assets/guestbook.png`).toString("base64")}`)
    .replace(`/assets/human-qr.png`, `data:image/png;base64,${readFileSync(`${path}/src/assets/human-qr.png`).toString("base64")}`)
    .replace(`/assets/letters.png`, `data:image/png;base64,${readFileSync(`${path}/src/assets/letters.png`).toString("base64")}`)
    .replace(`/assets/folk-qr.png`, `data:image/png;base64,${readFileSync(`${path}/src/assets/folk-qr.png`).toString("base64")}`)
    .replace(`/assets/knit-qr.png`, `data:image/png;base64,${readFileSync(`${path}/src/assets/knit-qr.png`).toString("base64")}`)
    .replace(`/assets/qr-life.png`, `data:image/png;base64,${readFileSync(`${path}/src/assets/qr-life.png`).toString("base64")}`)
    .replace(`/assets/qrcade.png`, `data:image/png;base64,${readFileSync(`${path}/src/assets/qrcade.png`).toString("base64")}`)
    .replaceAll('/assets/cube.gif', `data:image/gif;base64,${readFileSync(`${path}/src/assets/cube.gif`).toString("base64")}`)
    .replace(`/assets/andre.png`, `data:image/png;base64,${readFileSync(`${path}/src/assets/andre.png`).toString("base64")}`)
writeFileSync(`${path}/dist/retrospective.html`, retrospectiveContent, {recursive: true, force: true});

let rabbitholeContent = readFileSync(`${path}/src/rabbithole.html`, "utf-8")
    .replace(`url("/assets/cursor-small.webp")`, `url("data:image/gif;base64,${readFileSync(`${path}/src/assets/cursor-small.webp`).toString("base64")}")`)
    .replace(`url("/assets/ogcourier.woff2")`, `url("data:font/woff2;base64,${readFileSync(`${path}/src/assets/ogcourier.woff2`).toString("base64")}")`)
    .replace(`href="/assets/favicon.png"`, `href="data:image/png;base64,${readFileSync(`${path}/src/assets/favicon.png`).toString("base64")}"`)
    .replace('src="/assets/hellcat.gif"', `src="data:image/gif;base64,${readFileSync(`${path}/src/assets/hellcat.gif`).toString("base64")}"`)
    .replace(`src="/assets/next.png"`, `src="data:image/png;base64,${readFileSync(`${path}/src/assets/next.png`).toString("base64")}"`)
writeFileSync(`${path}/dist/rabbithole.html`, rabbitholeContent, {recursive: true, force: true});

let submissionsContent = readFileSync(`${path}/src/submissions.html`, "utf-8")
    .replace(`url("/assets/ogcourier.woff2")`, `url("data:font/woff2;base64,${readFileSync(`${path}/src/assets/ogcourier.woff2`).toString("base64")}")`)
    .replace(`href="/assets/favicon.png"`, `href="data:image/png;base64,${readFileSync(`${path}/src/assets/favicon.png`).toString("base64")}"`)
    .replace('<script src="sqlite3.js"></script>', `<script>${readFileSync(`${path}/src/sqlite3.js`, "utf-8")}</script>`)
writeFileSync(`${path}/dist/submissions.html`, submissionsContent, {recursive: true, force: true});

let escapeContent = readFileSync(`${path}/src/escape.html`, "utf-8")
    .replace(`url("/assets/ogcourier.woff2")`, `url("data:font/woff2;base64,${readFileSync(`${path}/src/assets/ogcourier.woff2`).toString("base64")}")`)
    .replace('src="/assets/computer.gif"', `src="data:image/gif;base64,${readFileSync(`${path}/src/assets/computer.gif`).toString("base64")}"`)
    .replace(`href="/assets/favicon.png"`, `href="data:image/png;base64,${readFileSync(`${path}/src/assets/favicon.png`).toString("base64")}"`)
    .replace(`src="/assets/recurse.png"`, `src="data:image/png;base64,${readFileSync(`${path}/src/assets/recurse.png`).toString("base64")}"`)
    .replace(`src="/assets/favicon.png"`, `src="data:image/png;base64,${readFileSync(`${path}/src/assets/favicon.png`).toString("base64")}"`)
    .replace(`src="/assets/email.png"`, `src="data:image/png;base64,${readFileSync(`${path}/src/assets/email.png`).toString("base64")}"`)
writeFileSync(`${path}/dist/escape.html`, escapeContent, {recursive: true, force: true});

let trifectaContent = readFileSync(`${path}/src/trifecta.html`, "utf-8")
    .replace(`url("/assets/ogcourier.woff2")`, `url("data:font/woff2;base64,${readFileSync(`${path}/src/assets/ogcourier.woff2`).toString("base64")}")`)
    .replace(`href="/assets/favicon.png"`, `href="data:image/png;base64,${readFileSync(`${path}/src/assets/favicon.png`).toString("base64")}"`)
    .replace('src="/assets/circle.gif"', `src="data:image/gif;base64,${readFileSync(`${path}/src/assets/circle.gif`).toString("base64")}"`)
    .replace('src="/assets/spine-3.gif"', `src="data:image/gif;base64,${readFileSync(`${path}/src/assets/spine-3.gif`).toString("base64")}"`)
    .replace('src="/assets/spine-4.gif"', `src="data:image/gif;base64,${readFileSync(`${path}/src/assets/spine-4.gif`).toString("base64")}"`)
    .replace('src="/assets/spine-5.gif"', `src="data:image/gif;base64,${readFileSync(`${path}/src/assets/spine-5.gif`).toString("base64")}"`)
writeFileSync(`${path}/dist/trifecta.html`, trifectaContent, {recursive: true, force: true});

let finaleContent = readFileSync(`${path}/src/finale.html`, "utf-8")
    .replace(`url("/assets/ogcourier.woff2")`, `url("data:font/woff2;base64,${readFileSync(`${path}/src/assets/ogcourier.woff2`).toString("base64")}")`)
    .replace(`href="/assets/favicon.png"`, `href="data:image/png;base64,${readFileSync(`${path}/src/assets/favicon.png`).toString("base64")}"`)
    .replace('src="/assets/basilisk.gif"', `src="data:image/gif;base64,${readFileSync(`${path}/src/assets/basilisk.gif`).toString("base64")}"`)
writeFileSync(`${path}/dist/finale.html`, finaleContent, {recursive: true, force: true});

let aloneContent = readFileSync(`${path}/src/alone.html`, "utf-8")
    .replace(`url("/assets/ogcourier.woff2")`, `url("data:font/woff2;base64,${readFileSync(`${path}/src/assets/ogcourier.woff2`).toString("base64")}")`)
    .replace(`href="/assets/favicon.png"`, `href="data:image/png;base64,${readFileSync(`${path}/src/assets/favicon.png`).toString("base64")}"`)
writeFileSync(`${path}/dist/alone.html`, aloneContent, {recursive: true, force: true});

cpSync(`${path}/src//assets/cube-f4dbdc79c695.gif`, `${path}/dist/cube-f4dbdc79c695.gif`, {recursive: true, force: true});
cpSync(`${path}/src/basilisk.blend.zip`, `${path}/dist/basilisk.blend.zip`, {recursive: true, force: true});
cpSync(`${path}/src/sqlite3.wasm`, `${path}/dist/sqlite3.wasm`, {recursive: true, force: true});
cpSync(`${path}/src/robots.txt`, `${path}/dist/robots.txt`, {recursive: true, force: true});
cpSync(`${path}/src/db.sqlite`, `${path}/dist/db.sqlite`, {recursive: true, force: true});
cpSync(`${path}/src/server.js`, `${path}/dist/server.js`, {recursive: true, force: true});

console.log("build completed");

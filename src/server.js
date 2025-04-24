/* files */
const fileRetrospective = Bun.file(`./retrospective.html`);
const fileBasilisk = Bun.file(`./basilisk.blend.zip`);
const fileRabbithole = Bun.file(`./rabbithole.html`);
const fileCube = Bun.file(`./cube-f4dbdc79c695.gif`);
const fileSnapshot = Bun.file(`./snapshot.html`);
const fileTrifecta = Bun.file(`./trifecta.html`);
const fileDemoCms = Bun.file(`./demo-cms.html`);
const fileSqlite3 = Bun.file(`./sqlite3.wasm`);
const fileEscape = Bun.file(`./escape.html`);
const fileFinale = Bun.file(`./finale.html`);
const fileAlone = Bun.file(`./alone.html`);
const fileIndex = Bun.file(`./index.html`);
const fileDb = Bun.file(`./demo.sqlite`);

/* routes */
const server = Bun.serve({
    port: 3000,
    async fetch(req){
        const url = new URL(req.url);
        const path = url.pathname;

        /* main */
        if(path === "/" || path === "/index.html"){return new Response(fileIndex, {headers: {"Content-Type": "text/html"}})};
        if(path === "/retrospective" || path === "/retrospective.html"){return new Response(fileRetrospective, {headers: {"Content-Type": "text/html"}})};
        if(path === "/demo-cms" || path === "/cms.html"){return new Response(fileDemoCms, {headers: {"Content-Type": "text/html"}})};
        if(path === "/snapshot" || path === "/snapshot.html"){return new Response(fileSnapshot, {headers: {"Content-Type": "text/html"}})};

        /* files */
        if(path === `/demo.sqlite`){return new Response(fileDb, {headers: {"Content-Type": "application/x-sqlite"}})};
        if(path === "/basilisk.blend.zip"){return new Response(fileBasilisk, {headers: {"Content-Type": "application/zip"}})};
        if(path === "/sqlite3.wasm"){return new Response(fileSqlite3, {headers: {"Content-Type": "application/wasm"}})};
        if(path === "/cube-f4dbdc79c695.gif"){return new Response(fileCube, {headers: {"Content-Type": "image/gif"}})};

        /* redirects */
        if(path === "/r/000000" || path === "/r/da70d6ff" || path === "/r/663399ff" || path === "/r/4b0082ff" || path === "/r/ff7f50ff" || path === "/r/ff6347ff"){return new Response(fileRabbithole, {headers: {"Content-Type": "text/html"}})}; /* self 777777 */
        if(path === "/r/777777"){return Response.redirect("http://ahg.lol/", 302)}; /* gelmbo 591212 */
        if(path === "/r/591212"){return Response.redirect("https://edge.destruct.dev", 302)}; /* destruct 666666 */
        if(path === "/r/666666"){return Response.redirect("https://fridgepoem.com/#x=314159&y=271828", 302)}; /* sam DDA0DD */
        if(path === "/r/DDA0DD"){return Response.redirect("https://www.devmandan.com/", 302)}; /* dan 013373 */
        if(path === "/r/013373"){return Response.redirect("https://homage.pareinoiddelusion.com/", 302)}; /* peter 0d5012ff */
        if(path === "/r/0d5012ff"){return Response.redirect("http://guywith.dog/", 302)}; /* quy with dog ff0033ff */
        if(path === "/r/ff0033ff"){return Response.redirect("https://sri.xyz/", 302)}; /* sri 242424 */
        if(path === "/r/242424"){return Response.redirect("https://calvin.sh", 302)}; /* calvin.sh 789def */
        if(path === "/r/789def"){return new Response(fileEscape, {headers: {"Content-Type": "text/html"}})};

        /* finale */
        if(path === "/r/1-00ffff"){return new Response(fileAlone, {headers: {"Content-Type": "text/html"}})};
        if(path === "/r/1-00ffff-2-ff00ff-3-ffff00"){return new Response(fileTrifecta, {headers: {"Content-Type": "text/html"}})};
        if(path === "/unlock-000000-777777-591212-666666-DDA0DD-013373-0d5012ff-ff0033ff-242424-789def"){return new Response("/cube-f4dbdc79c695.gif", { status: 200 })};
        if(path === "/r/4742-4722-a917-763l"){return new Response(fileFinale, {headers: {"Content-Type": "text/html"}})};

        /* error */
        return new Response("error", {status: 404});
    }
});

console.log(`Server running at http://localhost:${server.port}`);

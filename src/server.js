import { Database } from "bun:sqlite";
import { S3Client, file} from "bun";

/* db */
const db = new Database(`${process.env.STORE}/demo.sqlite`);
db.run(`
    CREATE TABLE IF NOT EXISTS submissions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR(64) NOT NULL,
        role VARCHAR(10) NOT NULL,
        email VARCHAR(254) NOT NULL,
        link VARCHAR(512) NOT NULL,
        category VARCHAR(8) NOT NULL,
        medium VARCHAR(64) NOT NULL,
        title VARCHAR(512) NOT NULL,
        author VARCHAR(254),
        notes VARCHAR(512),
        date DATETIME DEFAULT CURRENT_TIMESTAMP
    );
`);
const preparedsStatement = db.prepare("INSERT INTO submissions (name, role, email, link, category, medium, title, author, notes) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);");
async function dbInsert(req){
    try{
        const formData = await req.formData();
        console.log(formData);
        const name = (formData.get("name")?.slice(0, 64) || "-");
        const role = (formData.get("role")?.slice(0, 10) || "-");
        const email = (formData.get("email")?.slice(0, 254) || "-");
        const link = (formData.get("link")?.slice(0, 512) || "-");
        const category = (formData.get("category")?.slice(0, 8) || "-");
        const medium = (formData.get("medium")?.slice(0, 64) || "-");
        const title = (formData.get("title")?.slice(0, 512) || "-");
        const author = (formData.get("author")?.slice(0, 254) || "-");
        const notes = (formData.get("notes")?.slice(0, 512) || "-");
        preparedsStatement.run(name, role, email, link, category, medium, title, author, notes);
        return new Response("success", {status: 200});
    }
    catch{
        return new Response("error", {status: 400});
    };
};

/* backup */
const client = new S3Client({
    accessKeyId: process.env.R2_KEY,
    secretAccessKey: process.env.R2_SECRET,
    bucket: "qrshow-backup",
    endpoint: `https://${process.env.R2_ACCOUNT}.r2.cloudflarestorage.com`,
});
async function backup(){
    const timestamp = new Date().toISOString()
    await client.write(`backup-${timestamp}.sqlite`, file(`${process.env.STORE}/demo.sqlite`))
};
setInterval(backup, 1800000); /* 30min */
await backup();

/* files */
const fileSubmissions = Bun.file(`./submissions.html`);
const fileBasilisk = Bun.file(`./basilisk.blend.zip`);
const fileSqlite3Wasm = Bun.file(`./sqlite3.wasm`);
const fileIndex = Bun.file(`./index.html`);

/* routes */
const server = Bun.serve({
    port: 3000,
    async fetch(req) {
        const url = new URL(req.url);
        const path = url.pathname;
        if(path === "/" || path === "/index.html"){return new Response(fileIndex, {headers: {"Content-Type": "text/html"}})};
        if(path === "/submit" && req.method === "POST"){return dbInsert(req)};
        if(path === "/basilisk.blend.zip"){return new Response(fileBasilisk, {headers: {"Content-Type": "application/zip"}})};
        if(path === `/${process.env.SECURITY_MORE_LIKE_OBSCURITY}`){return new Response(fileSubmissions, {headers: {"Content-Type": "text/html"}})};
        if(path === "/sqlite3.wasm"){return new Response(fileSqlite3Wasm, {headers: {"Content-Type": "application/wasm"}})};
        if(path === `/${process.env.SECURITY_MORE_LIKE_OBSCURITY}/store/demo.sqlite`){return new Response(Bun.file(`${process.env.STORE}/demo.sqlite`), {headers: {"Content-Type": "application/x-sqlite"}})};
        if(path === "/r/ff0033ff"){return Response.redirect("https://www.julianrosefeldt.com/film-and-video-works/manifesto-_2014-2015/", 302)};
        if(path === "/r/da70d6ff"){return Response.redirect("https://www.youtube.com/watch?v=MzkmcVQTPE0", 302)};
        if(path === "/r/663399ff"){return Response.redirect("http://astronaut.io/", 302)};
        return new Response("error", {status: 404});
    },
});

console.log(`Server running at http://localhost:${server.port}`);

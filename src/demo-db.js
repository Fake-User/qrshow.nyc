/*
    this script creates a demo sqlite db & fills it with fake data.
    it uses ollama and a local model of your choice.
    just make sure ollama is running.
*/

import { Database } from "bun:sqlite";
const db = new Database(`demo.sqlite`);
db.run(`
    CREATE TABLE IF NOT EXISTS submissions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR(64),
        role VARCHAR(10),
        email VARCHAR(254),
        link VARCHAR(512),
        category VARCHAR(24),
        medium VARCHAR(64),
        title VARCHAR(512),
        notes VARCHAR(512),
        date VARCHAR(19)
    );
`);
const prepStatement = db.prepare("INSERT INTO submissions (name, role, email, link, category, medium, title, notes, date) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);");

const chars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function randInt(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function role(a, v, s){
    let att = a * Math.random();
    let vol = v * Math.random();
    let sub = s * Math.random();
    if(att >= vol && att >= sub){return "Attendee"};
    if(vol >= att && vol >= sub){return "Volunteer"};
    if(sub >= att && sub >= vol){return "Submission"};
};

async function gen(prompt){
    const res = await fetch("http://localhost:11434/api/generate", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            model: "gemma3:12b",
            prompt: prompt,
            stream: false,
        }),
    });
    const data = await res.json();
    return data.response.replaceAll("\n", "");
};

function promptName(){
    const firstNameChar = chars[randInt(0, chars.length - 1)];
    const firstNameLength = randInt(3, 7);
    const lastNameChar = chars[randInt(0, chars.length - 1)];
    const lastNameLength = randInt(4, 9);
    return `Think of a random full name (first name and last name). The first name starts with ${firstNameChar} and has ${firstNameLength} letters. The last name starts with ${lastNameChar} and has ${lastNameLength} letters. Use the format: First Last. Do not return any other text.`;
};

function padInt(int){
    let string = int.toString()
    if(string.length == 1){string = "0" + string}
    return string;
};

function getDate(){
    return `2025-03-${padInt(randInt(0, 15))} ${padInt(randInt(0, 24))}:${padInt(randInt(0, 60))}:${padInt(randInt(0, 60))}`;
};

function promptNote(){
    `Return a single sentence that describes an art / tech project about QR codes. Keep it short terse with around 12 words.`
}

function promptTitle(string){
    return `This string describes a project about QR codes: "${string}". Return a title for this project that embodies the description. The name should be 1 to 3 words long and include an interesting word from the string description. Do not return any other text.`;
};

function promptMedium(string){
    return `This string describes a QR code project: "${string}". Return a single word that describes this projects medium. This word should be a material or technique, for example: woven, writen, projected, live-code, performance, 3d printed. DO not return "QR" or "qr". Do not return any other text.`;
};

function promptLink(title, notes){
    return `"${title}" is a project about QR codes described as "${notes}". Return a short, fun, domain name for this project. Use https:// at the begining. Return only one link. Do not return any other text.`;
};

function promptCategory(string){
    return `This string describes a QR code project: "${string}". categorize this project as: Art, Protocol, Payload, History, or Other. Do not respond with anything other than: "Art", "Protocol", "Payload", "History", or "Other". Do not include the quotes.`;
};

function promptEmail(name){
    return `Create an email address for somebody named "${name}". Maybe use initalals or substrings. Do Not include the domain or the @ symbol. Only return the first part of the email before the @. Do not return multiple options. Only return a single string.`;
};

function getEmail(string, domain){
    let wildcard = domain === "-" ? "@spammer.net" : domain.replace("https://", "@");
    const emails = ["@protonmail.com", "@tuta.com", "@aol.com", "@lavabit.com", "@netscape.net", wildcard, wildcard, wildcard];
    return string + emails[randInt(0, emails.length - 1)];
}

async function genSubmission(){
    let row = {
        name: "",
        role: "",
        email: "",
        link: "-",
        medium: "-",
        title: "-",
        category: "-",
        notes: "-",
        date: ""
    };

    row.role = role(3, 1, 5);
    row.name = await gen(promptName());

    row.date = getDate();
    if(row.role === "Submission"){
        row.notes = getNote();
        row.title = await gen(promptTitle(row.notes));
        row.medium = await gen(promptMedium(row.notes));
        row.link = await gen(promptLink(row.title, row.notes));
        row.category = await gen(promptCategory(row.notes));
    }
    const emailHead = await gen(promptEmail(row.name));
    row.email = getEmail(emailHead, row.link);

    row.name = row.name.slice(0, 64);
    row.email = row.email.slice(0, 254);
    row.link = row.link.slice(0, 512);
    row.category = row.category.slice(0, 24);
    row.medium = row.medium.slice(0, 64);
    row.title = row.title.slice(0, 512);
    row.notes = row.notes.slice(0, 512);

    return row;
};

async function main(count){
    for(let i = 0; i < count; i++){
        let row = await genSubmission();
        console.log(`[   ${(((i + 1) / count) * 100).toFixed(2)}%   ]`);
        console.log(row);
        prepStatement.run(row.name, row.role, row.email, row.link, row.category, row.medium, row.title, row.notes, row.date);
    };
};
main(999);

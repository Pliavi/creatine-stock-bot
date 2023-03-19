import fs from "fs";
import path from "path";
import url from "url";
// This is the only way to get the root path of the project
var __filename = url.fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);
global.mainPath = __dirname;
var filepath = path.join(mainPath, "teste.json");
fs.writeFileSync(filepath, JSON.stringify({
    teste: "teste"
}));

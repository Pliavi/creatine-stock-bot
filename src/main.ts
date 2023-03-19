import fs from "fs";
import path from "path";
import url from "url";

// This is the only way to get the root path of the project
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
global.mainPath = __dirname;

const filepath = path.join(mainPath, "teste.json");

fs.writeFileSync(filepath, JSON.stringify({ teste: "teste" }));

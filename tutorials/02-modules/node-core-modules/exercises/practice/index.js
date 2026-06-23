/**** NODE CORE MODULES: PRACTICE ****/

/*
    Practice using Node's native core libraries to look up system metrics 
    and construct automated local files.
*/

/** EXERCISE **/

// TODO: Use CommonJS syntax to import os, path, and fs
const os = require("os");
const path = require("path");
const fs = require("fs");
/*
    TODO: Build a local file generator script.
    1. Look up the total system memory of the computer using 'os.totalmem()'.
    2. Create a template literal string named 'memoryStats' reading: "Total System Memory: [bytes] bytes."
    3. Use 'path.join' to map a target file path pointing to a file named "system.txt".
    4. Use 'fs.writeFileSync' to save that string into that path destination.
    5. Use 'fs.readFileSync' in a try/catch block to read from the new file.
*/

//os.totalmem()
const systemMemory = os.totalmem();
const memoryStats = `Total System Memory: ${systemMemory} bytes`;

//path.join
const createNewFile = path.join(process.cwd(),"system.txt");
// console.log(`New file destination safely routed: ${createNewFile}`);

//fs.writeFileSync
fs.writeFileSync(createNewFile, memoryStats);

//const fs.readFileSync
try {
    const fileData = fs.readFileSync("system.txt","utf-8");
    console.log(`REPORT: \n${fileData}`);
} catch (err) {
    console.error("Error reading file:",err);
}

/*OUTPUT:
REPORT: 
Total System Memory: 17179869184 bytes
*/
/**** NODE CORE MODULES ****/

// DEMO Import os, path, and fs (no relative path needed)
const os = require("os");
const path = require("path"); //don't need a relative path
const fs = require("fs");

/*
    import os from 'os';
    import path from 'path';
    import fs from 'fs';
*/

// DEMO STEP 1: Gather raw environmental data using the OS module
const hostPlatform = os.platform(); 
const currentUserName = os.userInfo().username;

const diagnosticReport = `Arcade Engine Session Log \nUser: ${currentUserName} \nPlatform: ${hostPlatform}`;

// DEMO STEP 2: Construct a cross-platform file destination string for log.txt.
const safeFilePath = path.join(process.cwd(),"log.txt");
console.log(`Target destination safely mapped: ${safeFilePath}`);
//Target destination safely mapped: /Users/Nik/Desktop/Coding/launchcode/modular-javascript/tutorials/02-modules/node-core-modules/exercises/demo/log.txt

// DEMO STEP 3: Write the string data onto the hard drive.
fs.writeFileSync(safeFilePath, diagnosticReport);

// DEMO STEP 4: Read from the new file and log the result to the console.
try {
    const data = fs.readFileSync("log.txt", "utf-8");
    console.log(`LOG: \n${data}`);
} catch (err) {
    console.error("Error reading file:", err);
}

/*OUTPUT:
LOG: 
Arcade Engine Session Log 
User: nik 
Platform: darwin
*/

/* 
    Follow up with additional exercises after demo for hands-on practice 
    with problem-solving and coding!
*/

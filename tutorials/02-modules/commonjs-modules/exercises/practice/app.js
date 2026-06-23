/**** COMMONJS MODULES: PRACTICE ****/

/*
    Practice using CommonJS syntax to isolate settings data matrices 
    and import them cleanly into an entry point file.
*/

/** EXERCISE: REPAIRING THE EXPORT COUPLING **/

/*
    TODO: Write the matching CommonJS import statement to 'require' the 
    settings module from its relative file path ("./settings.js"). 
    Capture it in a constant named 'config', then replace null values
    in the log statements with the correct references.
*/

const dataBundle = require("./settings.js");

console.log(`Welcome to ${dataBundle.gameTitle}!`);
console.log(`Maximum allowed team size: ${dataBundle.maxPartySize} players.`);

/* OUTPUT:
Welcome to Retro Arcade Realms!
Maximum allowed team size: 4 players.
*/
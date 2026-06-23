/**** COMMONJS MODULES ****/

// DEMO: Import the assets from gameData.js
const dataBundle = require("./gameData.js"); //dataBundle represents an object
// DEMO: Replace null values below with the correct references to the imported assets
console.log("--- INITIALIZING ARCADE ASSETS ---");
console.log(`Configuring system... Default Player Health: ${dataBundle.startingHealthValue}`);
console.log(`Spawning equipment... Starter weapon designated: ${dataBundle.defaultWeaponName}`);

/* 
    Follow up with additional exercises after demo for hands-on practice 
    with problem-solving and coding!
*/


/* OUTPUT:
--- INITIALIZING ARCADE ASSETS ---
Configuring system... Default Player Health: 100
Spawning equipment... Starter weapon designated: Wooden Training Sword
*/
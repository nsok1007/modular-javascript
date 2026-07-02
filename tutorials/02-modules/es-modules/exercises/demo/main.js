/**** ES MODULES ****/

// DEMO: Add a package.json file to this directory to configure for ES modules
// import { coinSound,damageSound } from "./soundEffects"; 

// DEMO: Destructure the exact assets needed using modern syntax.
import { coinSound,playLaser } from "./soundEffects.js"; 

// DEMO: Log the coin sound and the laser sound
console.log("--- AUDIO BOARD INITIALIZED ---");

// console.log(assests.coinSound); //not defined
// console.log(assets.playLaser()); //not defined

// CORRECT SOLUTION
console.log(coinSound);
console.log(playLaser());

/* OUTPUT:
--- AUDIO BOARD INITIALIZED ---
🔊 *Clink!* Gold added.
⚡ *Pew! Pew!* Laser fired.

*/
/* 
    Follow up with additional exercises after demo for hands-on practice 
    with problem-solving and coding!
*/

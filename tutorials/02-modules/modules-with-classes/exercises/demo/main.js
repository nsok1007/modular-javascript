/**** USING MODULES WITH CLASSES ****/

// DEMO: Import the Wizard class and the randomization utility function
import Wizard from "./classes/Wizard.js";
import { getRandominRange } from "./utils/mathUtils.js";

// DEMO: Instantiate our player
const player = new Wizard("Merlin");

// DEMO: Complete the gameplay simulation below
console.log(`${player.name} enters the cave.`);

console.log(`
A troll appears! 

Choose an action:
    0 - Fight
    1 - Cast a Spell
    2 - Run
`);

console.log(player.castSpell());

console.log(`
The troll takes ${getRandominRange(10,4)} damage!

Choose an action:
    0 - Fight
    1 - Cast a Spell
    2 - Run
`);

console.log(player.castSpell());

/* OUTPUT:
Merlin enters the cave.

A troll appears! 

Choose an action:
    0 - Fight
    1 - Cast a Spell (selected)
    2 - Run

Merlin casts a spell using 5 magic points! Points left: 40

The troll takes 14 damage!

Choose an action:
    0 - Fight
    1 - Cast a Spell (selected)
    2 - Run

Merlin casts a spell using 10 magic points! Points left: 32

CONTINUING TO TEST BEYOND THIS POINT WILL FURTHER REDUCE POINTS. MUST REFRESH TERMINAL.
*/
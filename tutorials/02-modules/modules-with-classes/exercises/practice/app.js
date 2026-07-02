/**** USING MODULES WITH CLASSES: PRACTICE SOLUTION ****/

/*
    Practice separating class blueprints into dedicated files and importing 
    them across complex directory structures.
*/

/*
    TODO: Import the Warrior class
*/
import Warrior from "./classes/Warrior.js"; // ./classes./file because of directory nesting

/*
    TODO: Instantiate a new warrior named Arthur, then switch his stance and
    log the result.
*/

const warrior = new Warrior("Arthur");
console.log(warrior.switchStance());
/**** ADVANCED PROPERTIES & DEFAULT VALUES ****/

/** EXAMPLE 1 - THE LEVEL ONE BLUEPRINT **/

class Player {
	// DEMO: Add a second optional parameter
	constructor(playerName, weapon = "Wooden Staff") {
		this.name = playerName;
		// DEMO: Add a property and assign the second parameter to it
		this.weapon = weapon;
		// DEMO: Add two more properties with hardcoded defaults
		this.level = 1;
		this.isAlive = true;
	}
}

/** EXAMPLE 2 - COMPARING THE INSTANCES **/

// DEMO: Create Player 1 and use both parameters
const warrior = new Player("Arthur", "Iron Sword");

// DEMO: Create Player 2 and use only the first parameter
const wizard = new Player("Merlin");

// DEMO: Log the first player's name, equipped weapon, and current level.
console.log(`${warrior.name} enters the match carrying an ${warrior.weapon}!`);
console.log(`Current status: Level ${warrior.level}`);

// DEMO: Log the second player's name, equipped weapon, and current level.
console.log(`${wizard.name} enters the match carrying an ${wizard.weapon}!`);
console.log(`Current status: Level ${wizard.level}`);
/* 
    Follow up with additional exercises after demo for hands-on practice 
    with problem-solving and coding!
*/

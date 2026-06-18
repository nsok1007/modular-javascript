/**** CLASS METHODS ****/

/** EXAMPLE 1 - RECONSTRUCTING ACTIONS THE RIGHT WAY **/

class Wizard {
	constructor(wizardName, startingMagic = 50) {
		this.name = wizardName;
		this.magicPoints = startingMagic;
		// DEMO: Define an anonymous method that will be stored with every object instance
		this.rest = () => {
			this.magicPoints += 10;
		} //stores the ENTIRE function
	}

	// DEMO: Define a named function (but omit keyword) that will be stored with the class
	castSpell(spellName, cost) {
		if(this.magicPoints >= cost) {
			this.magicPoints -= cost;
			return `${this.name} casts ${spellName}! Magic remaining: ${this.magicPoints}.`;
		} else {
			return `${this.name} does not have enough magic to cast ${spellName}!`;
		}
	} //stored at the CLASS LEVEL
}

/** EXAMPLE 2 - RUNNING REUSABLE ACTIONS **/
const player1 = new Wizard("Merlin", 60);
const player2 = new Wizard("Gandalf", 15);

// DEMO: Have each player cast a spell
console.log(player1.castSpell("Fireball", 40));
console.log(player2.castSpell("Lightning Bolt", 30));
/* 
    Follow up with additional exercises after demo for hands-on practice 
    with problem-solving and coding!
*/

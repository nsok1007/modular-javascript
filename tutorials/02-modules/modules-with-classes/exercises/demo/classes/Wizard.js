// We can import utility helpers directly into our specialized class files!
import { getRandominRange } from "../utils/mathUtils.js";

// Export the class blueprint directly
export default class Wizard { //files that hold single classes should always be named the CLassName using PascalCase; default means values don't need to be destructured from an object
	constructor(name) {
		this.name = name;
		this.magicPoints = 50;
	}

	castSpell() {
		// Use the imported helper function to calculate variable cost
		const magicUsed = getRandominRange(15, 5);
		this.magicPoints -= magicUsed;
		return `${this.name} casts a spell using ${magicUsed} magic points! Points left: ${this.magicPoints}`;
	}
}

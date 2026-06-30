/**** TEST-DRIVEN DEVELOPMENT (TDD) ****/

import { checkLevelUp } from "../levelEngine.js";

describe("The checkLevelUp method", () => {
	// DEMO: Write a test that check if player has enough XP to level up
	// test.todo("returns true if character has enough XP to level up");
	test("returns true if character has enough XP to level up", () => {
		let character = {xp: 120}; 
		let targetXP = 100; //level up XP required
 
		expect(checkLevelUp(character,targetXP)).toBe(true);
	});

	// DEMO: Write a test that makes sure if a player levels up they
	// also have their XP reset to 0. Use exact threshold amount.
	// test.todo("resets current XP accurately if player levels up");
	test("resets current XP accurately if player levels up", () => {
		const character = {xp: 100, level: 1};
		const targetXP = 100;

		checkLevelUp(character, targetXP);
		expect(character.xp).toBe(0);
		expect(character.level).toBe(2);
	});

});

/* 
    Follow up with additional exercises after demo for hands-on practice 
    with problem-solving and coding!
*/

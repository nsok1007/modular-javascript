// DEMO: Write just enough code to make the first test pass

// DEMO: Refactor the code to handle edge cases and make the second test pass

export function checkLevelUp(character, targetXP) {
	if (character.xp >= targetXP) {
		character.xp -= targetXP; //subtract experience points spent
		character.level += 1; //level character up by 1
		return true;
	}
	return false;
}

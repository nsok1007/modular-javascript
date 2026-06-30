/**** UNIT TESTING BASICS ****/

// JEST TEST FILE: We import the functions we want to inspect
import { calculateCombinedPower, getStarterSpells } from "../partyUtils.js";

// // DEMO: Set up test with separate actual and expected variables
test("calculateCombinedPower accurately sums combat values of party members", () => {
    let actual = calculateCombinedPower(15,12); //gets stored as actual
    let expected = 27; //usually a hard-coded arguement to test against

    expect(actual).toBe(expected); //expect the actual to be the expected

    // DEMO: Make assertion using variables
    expect(calculateCombinedPower(0,50)).toBe(50); 
    //npm test partyUtils.test.js --> run a file regardless of where you are in the directory
}); 

// test.todo("getStarterSpells returns the correct initial magic array layout"); //remove .todo to make it a test
test("getStarterSpells returns the correct initial magic array layout", () => {
    const spellbook = getStarterSpells();

    //.toBe and .toEqual matcher for data structure equality
    expect(spellbook).not.toBe(["Fireball", "Heal Shield"]); 
    expect(spellbook).toEqual(["Fireball", "Heal Shield"]); 

    // .toContain matcher checks if the arguement is is included
    expect(spellbook).toContain("Fireball");
})

/* 
    Follow up with additional exercises after demo for hands-on practice 
    with problem-solving and coding!
*/

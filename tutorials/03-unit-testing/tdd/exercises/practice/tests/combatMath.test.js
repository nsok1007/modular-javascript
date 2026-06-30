/**** TEST-DRIVEN DEVELOPMENT (TDD): PRACTICE ****/

/*
    Practice driving development cycles using the Red-Green-Refactor loop layout 
    to write predictable variable arithmetic reduction engines.
*/

/** EXERCISE: DRIVING CODE GENERATION VIA FAILURES **/

import { reduceDamage } from "../combatMath.js";

// TODO: Write a test that ensures the reduceDamage function works,
// then run it, even though the code hasn't been written yet that will make it pass
test("reduces damage from raw attacks based on armor value",() =>{
    let rawDamage = 20;
    let armorValue = 80;

    expect(reduceDamage(rawDamage,armorValue)).toBe(true);
});

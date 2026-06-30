/**** UNIT TESTING BASICS: PRACTICE ****/

/*
    Practice writing clean test definitions and applying the correct 
    Jest matchers to evaluate primitive values and arrays.
*/

/** EXERCISE 1: TESTING MANA REGENERATION BOUNDS **/

import { regenerateMP } from "../mpEngine.js";

/*
    TODO: Write a Jest test block using 'test()' that asserts:
    1. Calling regenerateMP(45, 15) returns exactly 60 using '.toBe()'
    2. Calling regenerateMP(90, 20) safely caps out at 100 using '.toBe()'
*/

// Don't forget to remove the .todo before passing in the second argument
test("regenerateMP adds points correctly and respects maxMP", () => {
    let actual = regenerateMP(45,15);
    let expected = 60;

    expect(actual).toBe(expected);

    expect(regenerateMP(45,15)).toBe(60);
});

test("regenerateMP adds points correctly and respects maxMP", () => {
    let totalMP = regenerateMP(90,20);
    let maxMP = 100;

    expect(totalMP).toBe(maxMP);
    expect(regenerateMP(90,20)).toBe(100);

    //total magicPower = 90MP + 20regenAmount
    //return total magicPower > 100MP? maxMP: 100;
});

// console.log(regenerateMP(90,20));
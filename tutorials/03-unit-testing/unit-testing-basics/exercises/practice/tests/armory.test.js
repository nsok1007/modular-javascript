/**** UNIT TESTING BASICS: PRACTICE ****/

/** EXERCISE 2: DEBUGGING INVENTORY ARRAY MATCHERS **/

import { generateStarterKit } from "../armory.js";

test("generateStarterKit creates a complete physical gear list", () => {
    const starterKit = generateStarterKit();

    expect(starterKit).toEqual(["Iron Sword", "Steel Shield", "Health Potion"]);
    expect(starterKit).not.toBe(["Iron Sword", "Steel Shield", "Health Potion"]);

    expect(starterKit).toContain("Steel Shield");

});

/**** ES MODULES: PRACTICE ****/

/*
    Practice configuring modern ES Module pipelines, exporting named assets, 
    and destructuring imports from relative file pathways.
*/

/** EXERCISE: RECONFIGURING CODES TO ESM **/

/*
    TODO: Add a package.json file with "name", "version", and "type" properties. Make
    sure the type is set to "module", or JavaScript will assume your files are
    CommonJS modules and will not accept modern import/export syntax.
*/

/*
    TODO: Write the destructured ES Module import statement below to pull 
    'scoreMultiplier' and 'doubleScore' out of "./gameCalculations.js".
    Replace null values below, passing in 150 points for the doubleScore function.
*/

console.log(`Current Event Multiplier: x${scoreMultiplier}`); //scoreMultipler = 2
console.log(`New total: ${doubleScore(150)} points!`); //calculates 150 x scoreMultiplier --> 300

import {scoreMultiplier,doubleScore} from "./gameCalculations.js";

/*OUTPUT:
Current Event Multiplier: x2
New total: 300 points!
*/
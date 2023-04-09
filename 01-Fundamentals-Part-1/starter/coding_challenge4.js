// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
// this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can
// start with an if/else statement, and then try to convert it to a ternary
// operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
// 316.25”
// Test data:
// §
//  Data 1: Test for bill values 275, 40 and 430

const bill1 = 275;
const bill2 = 40;
const bill3 = 430;

let tip11 = 50 <= bill1 && bill1 <= 300 ? 0.15 * bill1 : 0.20 * bill1;
let tip22 = 50 <= bill2 && bill2 <= 300 ? 0.15 * bill2 : 0.20 * bill2;
let tip33 = 50 <= bill3 && bill3 <= 300 ? 0.15 * bill3 : 0.20 * bill3;

console.log(tip11, tip22, tip33)
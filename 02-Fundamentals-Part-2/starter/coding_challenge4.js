'use strict mode'

// Your tasks:
// 1. Create an array 'bills' containing all 10 test bill values
// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
// tips and total values (bill + tip) for every bill value in the bills array. Use a for
// loop to perform the 10 calculations!

const bills = [22, 295, 176,440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

const calcTip = function (billValue){
    return billValue > 50 && billValue < 300 ? billValue * 0.15 : billValue * 0.2;
}

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]))
    totals.push(bills[i] + tips[i])
}

console.log(bills, tips, totals)
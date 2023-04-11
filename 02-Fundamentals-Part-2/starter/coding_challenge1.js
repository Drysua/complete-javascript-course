'use strict mode'

// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!

// Your tasks:
// 1.Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2
// 5. Ignore draws this time

let scoreDolphines1 = 44;
let scoreDolphines2 = 23;
let scoreDolphines3 = 71;

let scoreKoalas1 = 65;
let scoreKoalas2 = 54;
let scoreKoalas3 = 49;

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

function checkWinner(avgKoalas, avgDolphins) {
    if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
    } else if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphines win (${avgDolphins} vs ${avgKoalas})`);
    }
}

checkWinner(calcAverage(scoreKoalas1, scoreKoalas2, scoreKoalas3), 
calcAverage(scoreDolphines1, scoreDolphines2, scoreDolphines3));

scoreDolphines1 = 85;
scoreDolphines2 = 54;
scoreDolphines3 = 41;

scoreKoalas1 = 23;
scoreKoalas2 = 34;
scoreKoalas3 = 27;

checkWinner(calcAverage(scoreKoalas1, scoreKoalas2, scoreKoalas3), 
calcAverage(scoreDolphines1, scoreDolphines2, scoreDolphines3))






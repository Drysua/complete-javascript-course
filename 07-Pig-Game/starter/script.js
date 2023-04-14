'use strict';

const rollDiceBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const newGameBtn = document.querySelector('.btn--new');
const dice = document.querySelector('.dice');
const players = document.querySelectorAll('.player');

let scores = new Array(players.length).fill(0);
let currentScores = new Array(players.length).fill(0);
let player_id, endgame;

function initParams() {
    player_id = endgame = 0;
    scores.fill(0);
    currentScores.fill(0);
    players[0].querySelector('.score').textContent = 0;
    players[1].querySelector('.score').textContent = 0;

    players[0].classList.remove('player--winner');
    players[1].classList.remove('player--winner');

    players[0].classList.add('player--active');
    players[1].classList.remove('player--active');
}

initParams();

function switchPlayer() {
    players[player_id].classList.remove('player--active');
    player_id = 1 - player_id;
    players[player_id].classList.add('player--active');
    console.log('Current player ' + player_id);
}

function rollDice() {
    if (endgame) return;
    let result = Math.trunc(Math.random() * 6) + 1;
    dice.src = `dice-${result}.png`;
    if (result == 1) {
        scores[player_id] = currentScores[player_id] = 0;
        players[player_id].querySelector('.current .current-score').textContent = 0;
        players[player_id].querySelector('.score').textContent = 0;
        holdScore();
    } else {
        players[player_id].querySelector('.current .current-score').textContent = currentScores[player_id] + result;
        currentScores[player_id] += result;
    }
}

function holdScore() {
    if (endgame) return;
    scores[player_id] += currentScores[player_id];
    currentScores[player_id] = 0;
    players[player_id].querySelector('.score').textContent = scores[player_id];
    players[player_id].querySelector('.current .current-score').textContent = 0;

    if (scores[player_id] >= 100) {
        endgame = true;
        players[player_id].classList.add('player--winner');
        return;
    }
    switchPlayer();
}

console.log(players[0])
console.log(players[0].querySelector('.score').textContent)
console.log(players[0].querySelector('.current .current-score').textContent)

rollDiceBtn.addEventListener('click', rollDice)
holdBtn.addEventListener('click', holdScore)

newGameBtn.addEventListener('click', initParams)
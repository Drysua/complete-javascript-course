'use strict';


let score = 20;
let highscore = 0;
let numberToGuess = Math.trunc(Math.random()*20) + 1;

// document.querySelector('.number').textContent = numberToGuess;

document.querySelector('.check').addEventListener('click', function() {
    const userGuess = Number(document.querySelector('.guess').value);
    if (userGuess === numberToGuess) {
        document.querySelector('.message').textContent = 'You won!!!';
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        document.querySelector('.number').textContent = numberToGuess;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
    } else {
        if (score <= 1) {
            document.querySelector('.message').textContent = 'You lost!!!';
            document.querySelector('.score').textContent = 0;
        } else {
            document.querySelector('.message').textContent =  userGuess > numberToGuess ? 'Too high' : 'Too low';
            score--;
            document.querySelector('.score').textContent = score;

            document.querySelector('body').style.backgroundColor = '#222';
            document.querySelector('.number').style.width = '15rem';
        }
    }
});

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    highscore = 0;
    numberToGuess = Math.trunc(Math.random()*20) + 1;

    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});


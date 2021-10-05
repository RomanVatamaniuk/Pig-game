'use strict';
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
let score0 = document.querySelector('#score--0');
let score1 = document.getElementById('score--1');
let diceEl = document.querySelector('.dice');
let curent0El = document.getElementById('current--0');
let curent1El = document.getElementById('current--1');
let New = document.querySelector('.btn--new');

let Roll = document.querySelector('.btn--roll');
let Hold = document.querySelector('.btn--hold');

score0.textContent = 0;
score1.textContent = 0;
diceEl.classList.add('hidden');
let currentScore = 0;
let scores = [0, 0];
let activePlayer = 0;
let playing = true;

const switchPlayer = function(){
   document.getElementById(`current--${activePlayer}`).textContent = 0;
   currentScore = 0;
   activePlayer = activePlayer === 0 ? 1 : 0;
   player0El.classList.toggle('player--active');
   player1El.classList.toggle('player--active');
};

Roll.addEventListener('click', function(){
    if(playing){
    const dice = Math.trunc(Math.random()*6)+1;
    diceEl.classList.remove('hidden');
    diceEl.src=`dice-${dice}.png`;

    if (dice !==1){
        currentScore = currentScore + dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
        switchPlayer();
    }
}
});

Hold.addEventListener('click', function(){
    if (playing){
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    if(scores[activePlayer]>=20){
        playing = false;
        diceEl.classList.add('hidden');
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    } else {
        switchPlayer();
    }
}
});
New.addEventListener('click', function(){
    score0.textContent = 0;
    score1.textContent = 0;
    currentScore = 0;
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
    scores = [0, 0];
    playing = true;
    curent0El = 0;
    curent1El = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = 0;
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
})
'use strict';

// Selecting elements
/*const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

// Starting conditions
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Check for rolled 1
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      // Finish the game
      playing = false;
      diceEl.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);*/
// image dice
let diceImage = document.querySelector('.dice');



let scores = [0,0];
let activePlayer =0;
let currentScore = 0;
let endGame = true;

let player0 = document.querySelector('.player--0');
let player1 = document.querySelector('.player--1');

let totalScore0 = document.getElementById('score--0');
let totalScore1 = document.querySelector('#score--1');

let currentScore0 = document.querySelector('#current--0');
let currentScore1 = document.querySelector('#current--1');

let btnRoll = document.querySelector('.btn--roll');
let btnHold = document.querySelector('.btn--hold');
let btnNew = document.querySelector('.btn--new');


function init(){
  totalScore0.textContent =0;
  totalScore1.textContent =0;
  currentScore0.textContent=0;
  currentScore1.textContent=0;
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  scores[0]=0;
  scores[1]=0;
  activePlayer=0;
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
  diceImage.classList.add('hidden');
  endGame = true;

}

function switchPlayer(){
    activePlayer = activePlayer ===0?1:0;
    currentScore=0;
    currentScore0.textContent=0;
    currentScore1.textContent=0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');

}

init();

btnRoll.addEventListener('click',function(){
  if(endGame){
  let diceNumber = Math.trunc(Math.random()*6)+1;
  console.log(diceNumber);
  diceImage.classList.remove('hidden');
  diceImage.src=`dice-${diceNumber}.png`;
  if(diceNumber !== 1){
    currentScore +=diceNumber;
    if(activePlayer === 0){
      currentScore0.textContent = currentScore;
    }else if(activePlayer === 1){
      currentScore1.textContent = currentScore;
    }
    
  }else{
    switchPlayer();

  }
}
});


btnHold.addEventListener('click',function(){
  if(endGame){
  if(activePlayer === 0){
    scores[0]+=currentScore;
    totalScore0.textContent=scores[0];
  }else if(activePlayer === 1){
    scores[1]+=currentScore;
    totalScore1.textContent=scores[1];

  }
  if(scores[0] >=20){
    player0.classList.add('player--winner');
    endGame = false;
  }else if(scores[1] >=20){
    player1.classList.add('player--winner');
    endGame = false;
  }
  switchPlayer();
}
});

btnNew.addEventListener('click',init);



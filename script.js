'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.highscore').textContent =
  localStorage.getItem('highScore') || 0; // Donne la valeur stockez

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Selecting and Manipulating Elements
console.log(
  (document.querySelector('.message').textContent = 'Find the right number !')
);
//document.querySelector('.number').textContent = 2; // document.querySelector('.number') -> on cible la class number / textContent nous permet de changer la valeur du texte
//document.querySelector('.score').textContent = 2;

// Handle Click Events
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value); // Nombre de fois que j'ai cliqué
  console.log(guess, typeof guess); // Indique que l'input est un number

  if (!guess) {
    displayMessage('No Number !');
    // Le message s'affiche si il n'y a pas de nombre dans l'input
  }

  // Implement the Game Logic
  else if (guess === secretNumber) {
    // Si mon nombre est correct le message s'affiche j'ai gagné
    displayMessage('Correct Number');
    document.querySelector('.number').textContent = secretNumber;
    // Affiche mon score aléatoire dans la class number

    // Manipulating CSS
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // Implement Highscores
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
      localStorage.setItem('highScore', highScore); // stock une valeur
    }

    // Refactoring: DRY
  } else if (guess !== secretNumber) {
    // Si guess est différent de secretNumber
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High !' : 'Too Low !');
      // Si guess est plus grand que le secretNumber le message Too high s'affiche et si il est plus petit l'autre message s'affiche
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game !');
      document.querySelector('.score').textContent = 0;
    }
  }
  /*else if (guess > secretNumber) {
    // Si mon nombre est plus grand le message s'affiche
    if (score > 1) {
      displayMessage('Too high !');
      score--; // réduit mon score
      document.querySelector('.score').textContent = score; // Affiche mon score à 20
    } else {
      // Je perd si j'arrive à 0 et affiche mon message lost
      displayMessage('You lost the game !');
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    // Si mon nombre est plus petit le message s'affiche
    if (score > 1) {
      displayMessage('Too low !');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game !');
      document.querySelector('.score').textContent = 0;
    }
  }*/
});

// CodingChallenge #1
document.querySelector('.again').addEventListener('click', () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  //highScore = 0;
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  //document.querySelector('.highscore').textContent = highScore;
});

'use strict';

// Uncomment the next lines to use your game instance in the browser
const Game = require('../modules/Game.class');
const game = new Game();

const domMas = [...document.querySelectorAll('tr')].map((tr) => [
  ...tr.children,
]);

const buttonStart = document.querySelector('.button.start');
const messageStart = document.querySelector('.message.message-start');
const buttonRestart = document.createElement('button');

let wasPressed = true;

function eventListenerForArrows() {
  document.addEventListener('keydown', (e) => {
    switch (e.key) {
      case 'ArrowUp':
      case 'w':
        if (wasPressed) {
          buttonStart.replaceWith(buttonRestart);
          wasPressed = false;
        }
        clearField();

        if (game.getStatus() === 'playing') {
          game.moveUp();
        }
        connectJsCellsWithDOM();
        changeScore();
        checkStatus();
        break;
      case 'ArrowDown':
      case 's':
        if (wasPressed) {
          buttonStart.replaceWith(buttonRestart);
          wasPressed = false;
        }
        clearField();

        if (game.getStatus() === 'playing') {
          game.moveDown();
        }
        connectJsCellsWithDOM();
        changeScore();
        checkStatus();
        break;
      case 'ArrowLeft':
      case 'a':
        if (wasPressed) {
          buttonStart.replaceWith(buttonRestart);
          wasPressed = false;
        }
        clearField();

        if (game.getStatus() === 'playing') {
          game.moveLeft();
        }
        connectJsCellsWithDOM();
        changeScore();
        checkStatus();
        break;
      case 'ArrowRight':
      case 'd':
        if (wasPressed) {
          buttonStart.replaceWith(buttonRestart);
          wasPressed = false;
        }
        clearField();

        if (game.getStatus() === 'playing') {
          game.moveRight();
        }
        connectJsCellsWithDOM();
        changeScore();
        checkStatus();
        break;
    }
  });
}

function startTheGame() {
  buttonRestart.classList.add('button');
  buttonRestart.classList.add('restart');
  buttonRestart.textContent = 'Restart';

  eventListenerForArrows();

  buttonStart.addEventListener('click', (e) => {
    messageStart.classList.add('hidden');

    clearField();
    game.start();
    connectJsCellsWithDOM();
  });

  buttonRestart.addEventListener('click', (e) => {
    clearField();
    game.restart();
    buttonRestart.replaceWith(buttonStart);
  });
}

function connectJsCellsWithDOM() {
  const gameMas = game.getState();

  gameMas.forEach((row, i) => {
    row.forEach((cell, j) => {
      if (cell !== 0) {
        domMas[i][j].textContent = cell;
      }
    });
  });
}

function clearField() {
  domMas.forEach((row) => {
    row.forEach((cell) => {
      cell.textContent = ' ';
    });
  });
}

function changeScore() {
  const scoreDOM = document.querySelector('.game-score');
  const scoreJS = game.getScore();

  scoreDOM.textContent = scoreJS;
}

function checkStatus() {
  const messageLose = document.querySelector('.message-lose');
  const messageWin = document.querySelector('.message-win');

  const statusTheGame = game.getStatus();

  if (statusTheGame === 'win') {
    messageWin.classList.remove('hidden');
  } else if (statusTheGame === 'lose') {
    messageLose.classList.remove('hidden');
  }
}

startTheGame();

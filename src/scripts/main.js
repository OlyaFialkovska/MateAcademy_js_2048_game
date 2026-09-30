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
        addClassesForColourCells(domMas[i][j]);
      }
    });
  });
}

function clearField() {
  domMas.forEach((row) => {
    row.forEach((cell) => {
      cell.textContent = ' ';
      cell.className = 'field-cell';
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

function addClassesForColourCells(cell) {
  switch (cell.textContent) {
    case '2':
      cell.classList.add('field-cell--2');
      break;
    case '4':
      cell.classList.add('field-cell--4');
      break;
    case '8':
      cell.classList.add('field-cell--8');
      break;
    case '16':
      cell.classList.add('field-cell--16');
      break;
    case '32':
      cell.classList.add('field-cell--32');
      break;
    case '64':
      cell.classList.add('field-cell--64');
      break;
    case '128':
      cell.classList.add('field-cell--128');
      break;
    case '256':
      cell.classList.add('field-cell--256');
      break;
    case '512':
      cell.classList.add('field-cell--512');
      break;
    case '1024':
      cell.classList.add('field-cell--1024');
      break;
    case '2048':
      cell.classList.add('field-cell--2048');
      break;
  }
}

startTheGame();

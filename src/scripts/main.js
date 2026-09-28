'use strict';

// Uncomment the next lines to use your game instance in the browser
// const Game = require('../modules/Game.class');
// const game = new Game();

// function getButtonsEvent() {
//   addEventListener('keydown', (e) => {
//     switch (e.key) {
//       case 'ArrowUp':
//       case 'w':
//         //moveUp();
//         break;
//       case 'ArrowDown':
//       case 's':
//         //moveDown();
//         break;
//       case 'ArrowLeft':
//       case 'a':
//         //moveLeft();
//         break;
//       case 'ArrowRight':
//       case 'd':
//         //moveRight();
//         break;
//     }
//   });
// }

// Write your code here

const initialState = [
  [0, 2, 2, 0],
  [4, 2, 2, 2],
  [4, 2, 4, 2],
  [4, 2, 2, 4],
];

moveLeft();
// console.log(initialState);
// console.log(score);

function moveLeft() {
  let indexStart = -1;
  let value = -1;
  let currChange = false;
  let score = 0;

  initialState.forEach((row) => {
    for (let i = 0; i < 4; i++) {
      if (row[i] === 0 && indexStart === -1) {
        indexStart = i;
      } else if (row[i] !== 0 && indexStart !== -1) {
        if (row[indexStart - 1] === row[i] && !currChange) {
          row[indexStart - 1] += row[i];
        } else {
          value = row[i];
          row[indexStart] = value;
          currChange = false;
        }
        row[i] = 0;
        i = indexStart;
        indexStart = -1;
      } else if (row[i] !== 0 && indexStart === -1) {
        if (row[i] === row[i + 1]) {
          row[i] += row[i + 1];
          row[i + 1] = 0;
          currChange = true;
        }
      }
    }
    indexStart = -1;
    value = -1;
    currChange = false;

    for (let i = 0; i < 4; i++) {
      score += row[i];
    }
  });

  return score;
}

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
  [2, 0, 0, 0],
  [2, 2, 2, 2],
  [2, 2, 4, 4],
  [2, 4, 8, 16],
];
let score = 0;

moveUp();
// console.log(initialState);

function moveUp() {
  let indexStart = -1;

  for (let j = 0; j < 4; j++) {
    for (let i = 0; i < 4; i++) {
      if (initialState[i][j] === 0 && indexStart === -1) {
        indexStart = i;
      } else if (initialState[i][j] !== 0 && indexStart !== -1) {
        initialState[indexStart][j] = initialState[i][j];
        initialState[i][j] = 0;
        indexStart++;
      }
    }

    for (let i = 0; i < 3; i++) {
      if (
        initialState[i][j] === initialState[i + 1][j] &&
        initialState[i][j] !== 0
      ) {
        initialState[i][j] += initialState[i + 1][j];
        initialState[i + 1][j] = 0;
        score += initialState[i][j];
      }
    }

    indexStart = -1;

    for (let i = 0; i < 4; i++) {
      if (initialState[i][j] === 0 && indexStart === -1) {
        indexStart = i;
      } else if (initialState[i][j] !== 0 && indexStart !== -1) {
        initialState[indexStart][j] = initialState[i][j];
        initialState[i][j] = 0;
        indexStart++;
      }
    }

    indexStart = -1;
  }

  return score;
}

// function moveRight() {
//   let indexStart = -1;

//   initialState.forEach((row) => {
//     console.log('before1zsuv', row);

//     for (let i = 3; i >= 0; i--) {
//       if (row[i] === 0 && indexStart === -1) {
//         indexStart = i;
//       } else if (row[i] !== 0 && indexStart !== -1) {
//         row[indexStart] = row[i];
//         row[i] = 0;
//         indexStart--;
//       }
//     }

//     console.log('after1zsuv', row);

//     for (let i = 3; i >= 1; i--) {
//       if (row[i] === row[i - 1] && row[i] !== 0) {
//         row[i] += row[i - 1];
//         row[i - 1] = 0;
//         score += row[i];
//       }
//     }

//     console.log('afterSum', row);
//     indexStart = -1;

//     for (let i = 3; i >= 0; i--) {
//       if (row[i] === 0 && indexStart === -1) {
//         indexStart = i;
//       } else if (row[i] !== 0 && indexStart !== -1) {
//         row[indexStart] = row[i];
//         row[i] = 0;
//         indexStart--;
//       }
//     }
//     console.log('after2zsuv', row);

//     indexStart = -1;
//   });
// }

// function moveLeft() {
//   let indexStart = -1;
//   let score = 0;

//   initialState.forEach((row) => {
//     console.log('before1zsuv', row);

//     for (let i = 0; i < 4; i++) {
//       if (row[i] === 0 && indexStart === -1) {
//         indexStart = i;
//       } else if (row[i] !== 0 && indexStart !== -1) {
//         row[indexStart] = row[i];
//         row[i] = 0;
//         indexStart++;
//       }
//     }

//     console.log('after1zsuv', row);

//     for (let i = 0; i < 3; i++) {
//       if (row[i] === row[i + 1]) {
//         row[i] += row[i + 1];
//         row[i + 1] = 0;
//         score += row[i];
//       }
//     }

//     console.log('afterSum', row);
//     indexStart = -1;

//     for (let i = 0; i < 4; i++) {
//       if (row[i] === 0 && indexStart === -1) {
//         indexStart = i;
//       } else if (row[i] !== 0 && indexStart !== -1) {
//         row[indexStart] = row[i];
//         row[i] = 0;
//         indexStart++;
//       }
//     }
//     console.log('after2zsuv', row);

//     indexStart = -1;
//   });

//   return score;
// }

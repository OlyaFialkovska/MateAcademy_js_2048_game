// 'use strict';

// // Uncomment the next lines to use your game instance in the browser
// const Game = require('../modules/Game.class');
// const game = new Game();

// function eventListenerForArrows() {
//   addEventListener('keydown', (e) => {
//     switch (e.key) {
//       case 'ArrowUp':
//       case 'w':
//         // moveUp();
//         console.log('w - Up');
//         break;
//       case 'ArrowDown':
//       case 's':
//         // moveDown();
//         console.log('s - Down');
//         break;
//       case 'ArrowLeft':
//       case 'a':
//         // moveLeft();
//         console.log('a - Left');
//         break;
//       case 'ArrowRight':
//       case 'd':
//         // moveRight();
//         console.log('d - Right');
//         break;
//     }
//   });
// }

// function startTheGame() {
//   const buttonStart = document.querySelector('.button.start');

//   buttonStart.addEventListener('click', (e) => {
//     console.log(e.target);
//   });

//   console.log(buttonStart.textContent);
// }

// eventListenerForArrows();

// startTheGame();

// // #region tests for class game
// // const initialState = [
// //   [2, 0, 0, 0],
// //   [2, 2, 2, 2],
// //   [2, 2, 4, 4],
// //   [2, 4, 8, 16],
// // ];

// // const copyMas = [
// //   [2, 0, 0, 0],
// //   [2, 2, 2, 2],
// //   [2, 2, 4, 4],
// //   [2, 4, 8, 16],
// // ];
// // const score = 0;

// // // moveUp();
// // // console.log(initialState);

// // if (
// //   initialState.every((row, i) =>
// row.every((cell, j) => cell === copyMas[i][j]))
// // ) {
// //   console.log(initialState);
// //   console.log(copyMas);
// // }

// // // function moveUp() {
// // //   let indexStart = -1;

// // //   for (let j = 0; j < 4; j++) {
// // //     for (let i = 0; i < 4; i++) {
// // //       if (initialState[i][j] === 0 && indexStart === -1) {
// // //         indexStart = i;
// // //       } else if (initialState[i][j] !== 0 && indexStart !== -1) {
// // //         initialState[indexStart][j] = initialState[i][j];
// // //         initialState[i][j] = 0;
// // //         indexStart++;
// // //       }
// // //     }

// // //     for (let i = 0; i < 3; i++) {
// // //       if (
// // //         initialState[i][j] === initialState[i + 1][j] &&
// // //         initialState[i][j] !== 0
// // //       ) {
// // //         initialState[i][j] += initialState[i + 1][j];
// // //         initialState[i + 1][j] = 0;
// // //         score += initialState[i][j];
// // //       }
// // //     }

// // //     indexStart = -1;

// // //     for (let i = 0; i < 4; i++) {
// // //       if (initialState[i][j] === 0 && indexStart === -1) {
// // //         indexStart = i;
// // //       } else if (initialState[i][j] !== 0 && indexStart !== -1) {
// // //         initialState[indexStart][j] = initialState[i][j];
// // //         initialState[i][j] = 0;
// // //         indexStart++;
// // //       }
// // //     }

// // //     indexStart = -1;
// // //   }

// // //   return score;
// // // }

// // // function moveRight() {
// // //   let indexStart = -1;

// // //   initialState.forEach((row) => {
// // //     console.log('before1zsuv', row);

// // //     for (let i = 3; i >= 0; i--) {
// // //       if (row[i] === 0 && indexStart === -1) {
// // //         indexStart = i;
// // //       } else if (row[i] !== 0 && indexStart !== -1) {
// // //         row[indexStart] = row[i];
// // //         row[i] = 0;
// // //         indexStart--;
// // //       }
// // //     }

// // //     console.log('after1zsuv', row);

// // //     for (let i = 3; i >= 1; i--) {
// // //       if (row[i] === row[i - 1] && row[i] !== 0) {
// // //         row[i] += row[i - 1];
// // //         row[i - 1] = 0;
// // //         score += row[i];
// // //       }
// // //     }

// // //     console.log('afterSum', row);
// // //     indexStart = -1;

// // //     for (let i = 3; i >= 0; i--) {
// // //       if (row[i] === 0 && indexStart === -1) {
// // //         indexStart = i;
// // //       } else if (row[i] !== 0 && indexStart !== -1) {
// // //         row[indexStart] = row[i];
// // //         row[i] = 0;
// // //         indexStart--;
// // //       }
// // //     }
// // //     console.log('after2zsuv', row);

// // //     indexStart = -1;
// // //   });
// // // }

// // // function moveLeft() {
// // //   let indexStart = -1;
// // //   let score = 0;

// // //   initialState.forEach((row) => {
// // //     console.log('before1zsuv', row);

// // //     for (let i = 0; i < 4; i++) {
// // //       if (row[i] === 0 && indexStart === -1) {
// // //         indexStart = i;
// // //       } else if (row[i] !== 0 && indexStart !== -1) {
// // //         row[indexStart] = row[i];
// // //         row[i] = 0;
// // //         indexStart++;
// // //       }
// // //     }

// // //     console.log('after1zsuv', row);

// // //     for (let i = 0; i < 3; i++) {
// // //       if (row[i] === row[i + 1]) {
// // //         row[i] += row[i + 1];
// // //         row[i + 1] = 0;
// // //         score += row[i];
// // //       }
// // //     }

// // //     console.log('afterSum', row);
// // //     indexStart = -1;

// // //     for (let i = 0; i < 4; i++) {
// // //       if (row[i] === 0 && indexStart === -1) {
// // //         indexStart = i;
// // //       } else if (row[i] !== 0 && indexStart !== -1) {
// // //         row[indexStart] = row[i];
// // //         row[i] = 0;
// // //         indexStart++;
// // //       }
// // //     }
// // //     console.log('after2zsuv', row);

// // //     indexStart = -1;
// // //   });

// // //   return score;
// // // }
// // #endregion

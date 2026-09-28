'use strict';

/**
 * This class represents the game.
 * Now it has a basic structure, that is needed for testing.
 * Feel free to add more props and methods if needed.
 */
class Game {
  rows = 4;
  columns = 4;
  initialStateOfField = [];
  lengthOfMassive = this.rows * this.columns - 1;
  /**
   * `idle` - the game has not started yet (the initial state);
   * `playing` - the game is in progress;
   * `win` - the game is won;
   * `lose` - the game is lost
   */
  status = 'idle';
  score = 0;

  constructor(
    initialState = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
  ) {
    this.initialStateOfField = initialState;
    // eslint-disable-next-line no-console
    console.log(initialState);
  }

  moveLeft() {
    let indexStart = -1;
    let value = -1;
    let currChange = false;

    this.initialStateOfField.forEach((row) => {
      for (let i = 0; i < this.columns; i++) {
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
        this.score += row[i];
      }
      indexStart = -1;
      value = -1;
      currChange = false;

      for (let i = 0; i < this.columns; i++) {
        this.score += row[i];
      }
    });
  } // left + count the score
  moveRight() {}
  moveUp() {}
  moveDown() {}

  getScore() {
    return this.score;
  }

  getState() {
    return this.initialStateOfField;
  }

  /**
   * Returns the current game status.
   *
   * @returns {string} One of: 'idle', 'playing', 'win', 'lose'
   *
   * `idle` - the game has not started yet (the initial state);
   * `playing` - the game is in progress;
   * `win` - the game is won;
   * `lose` - the game is lost
   */
  getStatus() {
    return this.status;
  }

  start() {
    this.addRandomTile();
    this.addRandomTile();
    this.status = 'playing';
  }

  restart() {
    for (let i = 0; i < this.lengthOfMassive; i++) {
      const indexRow = Math.floor(i / 4);
      const indexColumn = i % 4;

      this.initialStateOfField[indexRow][indexColumn] = 0;
    }
    this.score = 0;

    this.start();
    this.status = 'playing';
  }

  // Add your own methods here

  addRandomTile() {
    const randomNumber = Math.random();

    let randomIndex = parseInt(Math.random() * this.lengthOfMassive);
    let indexRow = Math.floor(randomIndex / this.rows);
    let indexColumn = randomIndex % this.columns;

    let count = 0;

    if (this.initialStateOfField[indexRow][indexColumn] === 2048) {
      this.status = 'win';

      return;
    }

    while (this.initialStateOfField[indexRow][indexColumn] !== 0) {
      randomIndex = parseInt(Math.random() * this.lengthOfMassive);
      indexRow = Math.floor(randomIndex / this.rows);
      indexColumn = randomIndex % this.columns;

      if (count === this.lengthOfMassive) {
        this.status = 'lose';
        break; // end the game  - there arent any empty place
      }
      count++;
    }

    this.initialStateOfField[indexRow][indexColumn] =
      randomNumber >= 0.9 ? 4 : 2;
  }
}

module.exports = Game;

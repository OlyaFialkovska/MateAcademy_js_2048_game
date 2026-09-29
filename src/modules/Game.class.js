'use strict';

/**
 * This class represents the game.
 * Now it has a basic structure, that is needed for testing.
 * Feel free to add more props and methods if needed.
 */
class Game {
  rows = 4;
  columns = 4;
  fieldOfCells = [];
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
    this.fieldOfCells = initialState;
    // eslint-disable-next-line no-console
    console.log(initialState);
  }

  moveLeft() {
    let indexFirstZero = -1;

    this.fieldOfCells.forEach((row) => {
      for (let i = 0; i < this.columns; i++) {
        if (row[i] === 0 && indexFirstZero === -1) {
          indexFirstZero = i;
        } else if (row[i] !== 0 && indexFirstZero !== -1) {
          row[indexFirstZero] = row[i];
          row[i] = 0;
          indexFirstZero++;
        }
      }

      for (let i = 0; i < this.columns - 1; i++) {
        if (row[i] === row[i + 1] && row[i] !== 0) {
          row[i] += row[i + 1];
          row[i + 1] = 0;
          this.score += row[i];
        }
      }

      indexFirstZero = -1;

      for (let i = 0; i < this.columns; i++) {
        if (row[i] === 0 && indexFirstZero === -1) {
          indexFirstZero = i;
        } else if (row[i] !== 0 && indexFirstZero !== -1) {
          row[indexFirstZero] = row[i];
          row[i] = 0;
          indexFirstZero++;
        }
      }

      indexFirstZero = -1;
    });
  }

  moveRight() {
    let indexFirstZero = -1;

    this.fieldOfCells.forEach((row) => {
      for (let i = this.columns - 1; i >= 0; i--) {
        if (row[i] === 0 && indexFirstZero === -1) {
          indexFirstZero = i;
        } else if (row[i] !== 0 && indexFirstZero !== -1) {
          row[indexFirstZero] = row[i];
          row[i] = 0;
          indexFirstZero--;
        }
      }

      for (let i = this.columns - 1; i >= 1; i--) {
        if (row[i] === row[i - 1] && row[i] !== 0) {
          row[i] += row[i - 1];
          row[i - 1] = 0;
          this.score += row[i];
        }
      }

      indexFirstZero = -1;

      for (let i = this.columns - 1; i >= 0; i--) {
        if (row[i] === 0 && indexFirstZero === -1) {
          indexFirstZero = i;
        } else if (row[i] !== 0 && indexFirstZero !== -1) {
          row[indexFirstZero] = row[i];
          row[i] = 0;
          indexFirstZero--;
        }
      }

      indexFirstZero = -1;
    });
  }

  moveUp() {
    let indexFirstZero = -1;

    for (let j = 0; j < this.columns; j++) {
      for (let i = 0; i < this.rows; i++) {
        if (this.fieldOfCells[i][j] === 0 && indexFirstZero === -1) {
          indexFirstZero = i;
        } else if (this.fieldOfCells[i][j] !== 0 && indexFirstZero !== -1) {
          this.fieldOfCells[indexFirstZero][j] = this.fieldOfCells[i][j];
          this.fieldOfCells[i][j] = 0;
          indexFirstZero++;
        }
      }

      for (let i = 0; i < this.rows - 1; i++) {
        if (
          this.fieldOfCells[i][j] === this.fieldOfCells[i + 1][j] &&
          this.fieldOfCells[i][j] !== 0
        ) {
          this.fieldOfCells[i][j] += this.fieldOfCells[i + 1][j];
          this.fieldOfCells[i + 1][j] = 0;
          this.score += this.fieldOfCells[i][j];
        }
      }

      indexFirstZero = -1;

      for (let i = 0; i < this.rows; i++) {
        if (this.fieldOfCells[i][j] === 0 && indexFirstZero === -1) {
          indexFirstZero = i;
        } else if (this.fieldOfCells[i][j] !== 0 && indexFirstZero !== -1) {
          this.fieldOfCells[indexFirstZero][j] = this.fieldOfCells[i][j];
          this.fieldOfCells[i][j] = 0;
          indexFirstZero++;
        }
      }

      indexFirstZero = -1;
    }
  }

  moveDown() {
    let indexFirstZero = -1;

    for (let j = 0; j < this.columns; j++) {
      for (let i = this.rows - 1; i >= 0; i--) {
        if (this.fieldOfCells[i][j] === 0 && indexFirstZero === -1) {
          indexFirstZero = i;
        } else if (this.fieldOfCells[i][j] !== 0 && indexFirstZero !== -1) {
          this.fieldOfCells[indexFirstZero][j] = this.fieldOfCells[i][j];
          this.fieldOfCells[i][j] = 0;
          indexFirstZero--;
        }
      }

      for (let i = this.rows - 1; i >= 1; i--) {
        if (
          this.fieldOfCells[i][j] === this.fieldOfCells[i - 1][j] &&
          this.fieldOfCells[i][j] !== 0
        ) {
          this.fieldOfCells[i][j] += this.fieldOfCells[i - 1][j];
          this.fieldOfCells[i - 1][j] = 0;
          this.score += this.fieldOfCells[i][j];
        }
      }

      indexFirstZero = -1;

      for (let i = this.rows - 1; i >= 0; i--) {
        if (this.fieldOfCells[i][j] === 0 && indexFirstZero === -1) {
          indexFirstZero = i;
        } else if (this.fieldOfCells[i][j] !== 0 && indexFirstZero !== -1) {
          this.fieldOfCells[indexFirstZero][j] = this.fieldOfCells[i][j];
          this.fieldOfCells[i][j] = 0;
          indexFirstZero--;
        }
      }

      indexFirstZero = -1;
    }
  }

  getScore() {
    return this.score;
  }

  getState() {
    return this.fieldOfCells;
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

      this.fieldOfCells[indexRow][indexColumn] = 0;
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

    if (this.fieldOfCells[indexRow][indexColumn] === 2048) {
      this.status = 'win';

      return;
    }

    while (this.fieldOfCells[indexRow][indexColumn] !== 0) {
      randomIndex = parseInt(Math.random() * this.lengthOfMassive);
      indexRow = Math.floor(randomIndex / this.rows);
      indexColumn = randomIndex % this.columns;

      if (count === this.lengthOfMassive) {
        this.status = 'lose';
        break; // end the game  - there arent any empty place
      }
      count++;
    }

    this.fieldOfCells[indexRow][indexColumn] = randomNumber >= 0.9 ? 4 : 2;
  }
}

module.exports = Game;

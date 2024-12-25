const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rows = matrix.length; 
  const cols = matrix[0].length; 

  // пустая матрица для результата
  const result = [];
  for (let i = 0; i < rows; i++) {
    result.push(new Array(cols).fill(0));
  }

  // счиатем мины вокруг ячейки
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      let count = 0; 

      // проверяем всех соседей вокруг
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          // пропускаем эту ячейку
          if (i === 0 && j === 0) continue;

          const neighborRow = row + i;
          const neighborCol = col + j;

          // проверяем, что соседи внутри матрицы, а не за краями
          if (
            neighborRow >= 0 &&
            neighborRow < rows &&
            neighborCol >= 0 &&
            neighborCol < cols &&
            matrix[neighborRow][neighborCol] === true
          ) {
            count++;
          }
        }
      }

      result[row][col] = count;
    }
  }

  return result; 
}


module.exports = {
  minesweeper
};

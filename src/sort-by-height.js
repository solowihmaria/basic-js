const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // массив чисел для сортировки
  const heights = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      heights.push(arr[i]); // добавляем только те числа, которые не равны -1
    }
  }
  // сортируем новый массив
  heights.sort((a, b) => a - b);

  // создаём новый массив, возвращая -1 на места
  let index = 0;
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      result.push(-1); // если -1 был в старом, то и тут остается
    } else {
      result.push(heights[index]); // если нет, то отсортированное число
      index++;
    }
  }

  return result;
}

module.exports = {
  sortByHeight
};

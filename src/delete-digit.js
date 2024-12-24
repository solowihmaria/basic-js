const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const digits = n.toString().split(''); // преобразуем число в строку и делим на массив цифр
  let maxNumber = 0;

  for (let i = 0; i < digits.length; i++) {
    // уаляем цифру на текущей позиции
    const newNumber = Number(digits.slice(0, i).join('') + digits.slice(i + 1).join(''));
    // проверяем каждое число на максимум
    if (newNumber > maxNumber) {
      maxNumber = newNumber;
    }
  }

  return maxNumber;
}


module.exports = {
  deleteDigit
};

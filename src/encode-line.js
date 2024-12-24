const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let encoded = ''; 
  let count = 1; 

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      // если символы идутт подряд и повторяются, то счиатем
      count += 1;
    } else {
      // если нет, формируем часть результата
      encoded += (count > 1 ? count : '') + str[i];
      count = 1; // сбрасываем счетчик и повторяем дальше для других
    }
  }
  return encoded;
}

module.exports = {
  encodeLine
};

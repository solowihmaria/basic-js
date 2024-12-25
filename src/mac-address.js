const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(inputString) {
  
  const duos = inputString.split('-');
  // пар символов должно быть 6
  if (duos.length !== 6) {
    return false;
  }
  // проверяем каждую пару
  for (const duo of duos) {
    // длина  должна быть ровно 2 символа
    if (duo.length !== 2) {
      return false;
    }

    // проверяем, что оба символа являются шестнадцатеричными числами
    for (const char of duo) {
      const isDigit = char >= '0' && char <= '9'; 
      const isUpper = char >= 'A' && char <= 'F'; 
      const isLower = char >= 'a' && char <= 'f'; 

      if (!isDigit && !isUpper && !isLower) {
        return false; 
      }
    }
  }
  return true; 
}
module.exports = {
  isMAC48Address
};

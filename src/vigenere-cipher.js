const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {  
  //определяем прямой или обратный тип
  constructor(isDirect = true) {
    this.isDirect = isDirect; 
  }

  // для шифрования текста
  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');

    // приводим к верхнему регистру
    message = message.toUpperCase();
    key = key.toUpperCase();
    let result = '';
    let keyIndex = 0; // индекс символа в ключе

    for (let i = 0; i < message.length; i++) {
      let char = message[i];

      // если символ - буква
      if (char >= 'A' && char <= 'Z') {
        // шифруем букву по формуле Виженера
        let shift = key[keyIndex % key.length].charCodeAt(0) - 65;
        let encryptedChar = String.fromCharCode(((char.charCodeAt(0) - 65 + shift) % 26) + 65);
        result += encryptedChar;
        keyIndex++; // переход к след символу
      } else {
        // если символ не буква, добавляем его без изменений
        result += char;
      }
    }
    // если обратный, разворачиваем результат
    return this.isDirect ? result : result.split('').reverse().join('');
  }

  // метод для дешифрования текста
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error('Incorrect arguments!');

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();
    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < encryptedMessage.length; i++) {
      let char = encryptedMessage[i];

      if (char >= 'A' && char <= 'Z') {
        // расшифровываем букву по формуле 
        let shift = key[keyIndex % key.length].charCodeAt(0) - 65;
        let decryptedChar = String.fromCharCode(((char.charCodeAt(0) - 65 - shift + 26) % 26) + 65);
        result += decryptedChar;
        keyIndex++;
      } else {
        result += char;
      }
    }
    return this.isDirect ? result : result.split('').reverse().join('');
  }
}


module.exports = {
  VigenereCipheringMachine
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [], // массив для хранения 

  // Метод для получения длины цепочки
  getLength() {
    return this.chain.length;
  },

  // Метод для добавления 
  addLink(value) {
    if (value === undefined) {
      this.chain.push('(  )'); // пустое звено
    } else {
      this.chain.push(`( ${value} )`); // если передали значение
    }
    return this; 
  },

  // Метод для удаления 
  removeLink(position) {
    // проверяем, что значение является числом
    if (typeof position !== 'number') {
      this.chain = []; // сбрасываем 
      throw new Error("You can't remove incorrect link!");
    }
  
    // проверяем, что позиция является целым числом
    if (!Number.isInteger(position)) {
      this.chain = []; // сбрасываем 
      throw new Error("You can't remove incorrect link!");
    }
  
    // проверяем, что позиция больше нуля
    if (position <= 0) {
      this.chain = []; // сбрасываем 
      throw new Error("You can't remove incorrect link!");
    }
  
    // проверяем, что позиция существует в массиве
    if (position > this.chain.length) {
      this.chain = []; // сбрасываем 
      throw new Error("You can't remove incorrect link!");
    }
  
    // удаляем элемент из массива 
    for (let i = 0; i < this.chain.length; i++) {
      if (i === position - 1) {
        this.chain.splice(i, 1);
        break; 
      }
    }     
    return this;
  },

  // Метод для переворота ц
  reverseChain() {
    this.chain.reverse(); // переворачиваем массив
    return this; 
  },

  // Метод для завершения 
  finishChain() {
    const result = this.chain.join('~~'); // преобразуем массив в строку
    this.chain = []; // очищаем 
    return result;
  }
};

module.exports = {
  chainMaker
};

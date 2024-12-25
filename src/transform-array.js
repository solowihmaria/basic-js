const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  //создаем пустйо массив, куда будем формировать новый по правилам
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];

    switch (current) {
      case '--discard-next':
        // убираем следующий элемент, если он есть
        if (i + 1 < arr.length) {
          i++; // пропускаем индекс
        }
        break;

      case '--discard-prev':
        // убираем предыдущий элемент, если он есть
        if (result.length > 0 && arr[i - 2] !== '--discard-next') {
          result.pop();
        }
        break;

      case '--double-next':
        // дублируем следующий элемент, если он есть
        if (i + 1 < arr.length) {
          result.push(arr[i + 1]);
        }
        break;

      case '--double-prev':
        // дублируем предыдущий элемент, если он есть
        if (result.length > 0 && arr[i - 2] !== '--discard-next') {
          result.push(result[result.length - 1]);
        }
        break;

      default:
        // добавляем в результат обычные случаи
        result.push(current);
    }
  }
  return result;
}

module.exports = {
  transform
};

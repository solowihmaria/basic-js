const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {

  calculateDepth(arr) {
    let depth = 1; // начальная глубина
    // проходим каждый элемент массива
    for (let element of arr) {
      if (Array.isArray(element)) {
        // если это массив, вычисляем его глубину
        const nestedDepth = this.calculateDepth(element);
        // находим максимальную глубину
        if (nestedDepth + 1 > depth) {
          depth = nestedDepth + 1;
        }
      }
    }

    return depth;
  }
}

module.exports = {
  DepthCalculator
};

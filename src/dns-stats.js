const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const dnsCounts = {};

  domains.forEach(domain => {
    //разобьем домен на части и переворачиваепм порядок
    const pieces = domain.split('.').reverse();
    let dns = '';
    // соберем все комбинации и посчиаем
    for (let i = 0; i < pieces.length; i++) {
      dns = dns + '.' + pieces[i];
      if (!dnsCounts[dns]) {
        dnsCounts[dns] = 1; 
      } else {
        dnsCounts[dns] += 1; 
      }
    }
  });

  return dnsCounts;
}
module.exports = {
  getDNSStats
};

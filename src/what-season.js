const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  // дата не передана если
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  // проверка на поддельный объект Date
  if (
    !(date instanceof Date) || // проверим что это объект Date
    Object.getOwnPropertyNames(date).length > 0 // проверим, что нет доп свойств
  ) {
    throw new Error('Invalid date!');
  }

  // получим месяц и в зависимости от него время года
  const month = date.getMonth();
  if (month === 11 || month === 0 || month === 1) {
    return 'winter';
  } else if (month >= 2 && month <= 4) {
    return 'spring';
  } else if (month >= 5 && month <= 7) {
    return 'summer';
  } else if (month >= 8 && month <= 10) {
    return 'autumn';
  }  
}

module.exports = {
  getSeason
};

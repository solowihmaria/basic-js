const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  // проверяем, что входные данные это массив
  if (!Array.isArray(members)) {
    return false;
  }

  return members
    .filter(member => typeof member === 'string') // учиываем только строки
    .map(name => name.trim()[0].toUpperCase()) // берем первые буквы капсом
    .sort() // сортируем в алф порядке
    .join(''); 
}

module.exports = {
  createDreamTeam
};


module.exports = {
  createDreamTeam
};

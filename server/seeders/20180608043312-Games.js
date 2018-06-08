'use strict';
const seed = require('./seeds/seed');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('games', seed.games);
    await queryInterface.bulkInsert('instructions', seed.instructions);
    await queryInterface.bulkInsert('instructionItems', seed.instructionItems);
    return queryInterface.bulkInsert('parameters', seed.parameters);
  },

  down: async (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};

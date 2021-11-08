'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.changeColumn(
      'Citas',
      'day',
      {
        type: Sequelize.STRING
      }
    );
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.changeColumn(
      'Citas',
      'day',
      {
        type: Sequelize.DATE
      }
    );
  }
};
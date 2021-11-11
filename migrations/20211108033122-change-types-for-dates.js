'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.changeColumn(
      'Citas',
      'beginHour',
      {
        type: Sequelize.STRING
      }
    );
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.changeColumn(
      'Citas',
      'beginHour',
      {
        type: Sequelize.DECIMAL
      }
    );
  }
};
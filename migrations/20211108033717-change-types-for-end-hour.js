'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.changeColumn(
      'Citas',
      'endHour',
      {
        type: Sequelize.STRING
      }
    );
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.changeColumn(
      'Citas',
      'endHour',
      {
        type: Sequelize.DECIMAL
      }
    );
  }
};
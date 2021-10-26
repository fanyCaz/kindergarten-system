'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      return queryInterface.addColumn(
      'Servicios',
      'name',
      {
        type: Sequelize.STRING
      }
    );
  },
  down: async (queryInterface, Sequelize) => {
      return queryInterface.removeColumn(
      'Servicios',
      'name'
      );
    }
  };

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'usuarios',
      'password',{
        type:Sequelize.STRING,
        allowNull:true,
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'usuarios',
      'password'
    );
  }
};

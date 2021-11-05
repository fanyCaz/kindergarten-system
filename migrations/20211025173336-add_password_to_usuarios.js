'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Usuarios',
      'password',{
        type:Sequelize.STRING,
        allowNull:true,
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Usuarios',
      'password'
    );
  }
};

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'ServiciosNinos',
      'NinoId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Ninos',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    )
    .then(() => {
      return queryInterface.addColumn(
        'ServiciosNinos',
        'ServicioId',
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'Servicios',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        }
      );
    });
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'ServiciosNinos',
      'NinoId'
    )
    .then(() => {
      return queryInterface.removeColumn(
        'ServiciosNinos',
        'ServicioId'
      );
    });
  }
};

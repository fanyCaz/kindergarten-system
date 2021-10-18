'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Ninos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      entryDate: {
        type: Sequelize.DATE
      },
      birthData: {
        type: Sequelize.DATE
      },
      ageYears: {
        type: Sequelize.INTEGER
      },
      ageMonths: {
        type: Sequelize.INTEGER
      },
      ageDays: {
        type: Sequelize.INTEGER
      },
      checkIn: {
        type: Sequelize.INTEGER
      },
      checkOut: {
        type: Sequelize.INTEGER
      },
      serviceDays: {
        type: Sequelize.STRING
      },
      dailyHours: {
        type: Sequelize.INTEGER
      },
      alergies: {
        type: Sequelize.BOOLEAN
      },
      alergiesDescription: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.BOOLEAN
      },
      chronicCondition: {
        type: Sequelize.BOOLEAN
      },
      chronicConditionDescription: {
        type: Sequelize.STRING
      },
      emergencyNumber: {
        type: Sequelize.STRING
      },
      emotionalHealthDescription: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Ninos');
  }
};
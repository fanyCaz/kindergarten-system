'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Nino extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Nino.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    entryDate: DataTypes.DATE,
    birthData: DataTypes.DATE,
    ageYears: DataTypes.INTEGER,
    ageMonths: DataTypes.INTEGER,
    ageDays: DataTypes.INTEGER,
    checkIn: DataTypes.INTEGER,
    checkOut: DataTypes.INTEGER,
    serviceDays: DataTypes.STRING,
    dailyHours: DataTypes.INTEGER,
    alergies: DataTypes.BOOLEAN,
    alergiesDescription: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    chronicCondition: DataTypes.BOOLEAN,
    chronicConditionDescription: DataTypes.STRING,
    emergencyNumber: DataTypes.STRING,
    emotionalHealthDescription: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Nino',
  });
  return Nino;
};
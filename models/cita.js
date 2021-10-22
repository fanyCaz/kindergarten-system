'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cita extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Cita.init({
    beginHour: DataTypes.DECIMAL,
    endHour: DataTypes.DECIMAL,
    day: DataTypes.DATE,
    available: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Cita',
  });
  return Cita;
};
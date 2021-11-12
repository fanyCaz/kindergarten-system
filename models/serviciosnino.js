'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ServiciosNino extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ServiciosNino.init({
    days: DataTypes.STRING,
    hours: DataTypes.INTEGER,
    dailyHours: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ServiciosNino',
  });
  return ServiciosNino;
};

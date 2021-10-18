'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Servicio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Servicio.init({
    minAge: DataTypes.INTEGER,
    maxAge: DataTypes.INTEGER,
    cost: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Servicio',
  });
  return Servicio;
};
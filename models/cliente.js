'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Cliente.hasMany(models.Nino);
      Cliente.hasOne(models.Cita);
      // define association here
    }
  };
  Cliente.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    sector: DataTypes.STRING,
    phone: DataTypes.STRING,
    meansAware: DataTypes.STRING,
    cost: DataTypes.DECIMAL,
    paymentPeriod: DataTypes.INTEGER,
    status: DataTypes.STRING,
    returnable: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Cliente',
  });

  return Cliente;
};

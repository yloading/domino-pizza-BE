'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pizza extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Pizza.hasMany(models.Pizza_Addons, {foreignKey: 'pizza_id', sourceKey: 'pizza_id'});
      models.Pizza.belongsTo(models.Order, {foreignKey: 'order_number', targetKey: 'order_number'});
    }
  };
  Pizza.init({
    pizza_id: { type: DataTypes.INTEGER, autoIncrement: true,  primaryKey: true },
    order_number: DataTypes.INTEGER,
    pizza_number: DataTypes.INTEGER,
    size: DataTypes.ENUM('large', 'medium', 'small', 'extra large'),
    crust: DataTypes.STRING,
    type: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Pizza',
    tableName: 'pizzas',
  });
  return Pizza;
};
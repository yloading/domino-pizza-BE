'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Order.hasMany(models.Pizza, {foreignKey: 'order_number', sourceKey: 'order_number'});
    }
  };
  Order.init({
    order_number: { type: DataTypes.INTEGER, primaryKey: true }
  }, {
    sequelize,
    modelName: 'Order',
    tableName: 'orders',
  });
  return Order;
};
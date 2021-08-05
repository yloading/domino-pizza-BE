'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pizza_Addons extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Pizza_Addons.belongsTo(models.Pizza, {foreignKey: 'pizza_id', targetKey: 'pizza_id'});
    }
  };
  Pizza_Addons.init({
    id: { type: DataTypes.INTEGER, autoIncrement: true,  primaryKey: true },
    pizza_id: DataTypes.INTEGER,
    toppings_area: DataTypes.STRING,
    toppings_item: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pizza_Addons',
    tableName: 'pizza_addons',
  });
  return Pizza_Addons;
};
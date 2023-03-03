'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Coffee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Coffee.hasMany(
        models.Post,
        {
          foreignKey: 'id'
        }
      )
    }
  }
  Coffee.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: DataTypes.STRING,
    year: DataTypes.INTEGER,
    caffeineContent: DataTypes.FLOAT,
    caffeinePercentage: DataTypes.FLOAT,

  }, {
    sequelize,
    modelName: 'Coffee',
  });
  return Coffee;
};

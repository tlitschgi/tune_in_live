const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//Set up genre table
class Genre extends Model {}

Genre.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false
      },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'genre',
    }
  );
  
  module.exports = Genre;  
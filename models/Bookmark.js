const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//Set up bookmark table
class Bookmark extends Model {}

Bookmark.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    concert_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'concert',
        key: 'id',
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id',
      },
    },
     bookmark_date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'bookmark',
  }
);

module.exports = Bookmark;
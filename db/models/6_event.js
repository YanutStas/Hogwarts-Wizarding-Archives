'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class event extends Model {
    static associate(models) {
      this.hasMany(models.magicalCreature, { foreignKey: "id" });
    }
  }
  event.init({
    event: DataTypes.STRING,
    date: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'event',
  });
  return event;
};
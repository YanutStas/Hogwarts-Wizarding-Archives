'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class spell extends Model {
    static associate(models) {
      this.belongsTo(models.course, { foreignKey: "course_id" });
    }
  }
  spell.init({
    name: DataTypes.STRING,
    complexity: DataTypes.STRING,
    effect: DataTypes.STRING,
    course_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'spell',
  });
  return spell;
};
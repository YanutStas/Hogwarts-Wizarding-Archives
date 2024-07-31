"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class professor extends Model {
    static associate(models) {
      this.hasMany(models.artifact, { foreignKey: "id" });
      this.belongsTo(models.course, { foreignKey: "course_id" });
    }
  }
  professor.init(
    {
      teacher: DataTypes.STRING,
      item: DataTypes.STRING,
      officeNumber: DataTypes.INTEGER,
      course_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "professor",
    }
  );
  return professor;
};

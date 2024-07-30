"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class student extends Model {
    static associate(models) {
      this.hasMany(models.artifact, { foreignKey: "id" });
      this.hasMany(models.course, { foreignKey: "id" });
    }
  }
  student.init(
    {
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      yearOfStudy: DataTypes.INTEGER,
      specialAchievements: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "student",
    }
  );
  return student;
};

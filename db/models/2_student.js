"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class student extends Model {
    static associate(models) {
      this.hasMany(models.artifact, { foreignKey: "id" });
      //this.hasMany(models.course, { foreignKey: "id" });
      this.belongsTo(models.course, { foreignKey: "course_id" });
    }
  }
  student.init(
    {
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      yearOfStudy: DataTypes.INTEGER,
      specialAchievements: DataTypes.STRING,
      course_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "student",
    }
  );
  return student;
};

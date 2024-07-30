"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class artifact extends Model {
    static associate(models) {
      this.belongsTo(models.student, { foreignKey: "student_id" });
      this.belongsTo(models.professor, { foreignKey: "professor_id" });
    }
  }
  artifact.init(
    {
      item: DataTypes.STRING,
      history: DataTypes.STRING,
      location: DataTypes.STRING,
      magicalProperties: DataTypes.STRING,
      student_id: DataTypes.INTEGER,
      professor_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "artifact",
    }
  );
  return artifact;
};

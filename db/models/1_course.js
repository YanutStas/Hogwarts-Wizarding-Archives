'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class course extends Model {
    static associate(models) {
      //this.belongsTo(models.student, { foreignKey: 'student_id' });
      this.hasMany(models.professor, { foreignKey: "id" });
      this.hasMany(models.spell, { foreignKey: "id" });
      this.hasMany(models.student, { foreignKey: "id" });
    }
  }
  course.init({
    type: DataTypes.STRING,
    educationalMaterial: DataTypes.STRING,
    student_id: DataTypes.INTEGER,
    professor_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'course',
  });
  return course;
};
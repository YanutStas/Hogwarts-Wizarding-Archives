"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "courses",
      [
        {
          type: "Травология",
          educationalMaterial: "Красная книга",
          student_id: 1,
          professor_id: 2,
        },
        {
          type: "Зельеварение",
          educationalMaterial: "Зеленая книга",
          student_id: 2,
          professor_id: 1,
        },
        {
          type: "Трансфигурация",
          educationalMaterial: "Невидимая книга",
          student_id: 2,
          professor_id: 1,
        },
        {
          type: "Полеты на мете",
          educationalMaterial: "Поле",
          student_id: 1,
          professor_id: 4,
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("courses", null, {});
  },
};

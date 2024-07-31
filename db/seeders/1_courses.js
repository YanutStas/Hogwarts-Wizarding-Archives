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
        },
        {
          type: "Зельеварение",
          educationalMaterial: "Зеленая книга",
        },
        {
          type: "Трансфигурация",
          educationalMaterial: "Невидимая книга",
        },
        {
          type: "Полеты на мете",
          educationalMaterial: "Поле",
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("courses", null, {});
  },
};

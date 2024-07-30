"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "spells",
      [
        {
          name: "Авада кидавра",
          complexity: "Наверняка 100%",
          effect: "Быстрый кряк",
          course_id: 1,
        },
        {
          name: "Вингардиум левиоса",
          complexity: "Легкий",
          effect: "Поднимает перышко",
          course_id: 2,
        },
        {
          name: "Патронус",
          complexity: "Средний",
          effect: "Призывает оленя",
          course_id: 3,
        },
        {
          name: "Люмос",
          complexity: "Легкий",
          effect: "Придет на помощь, если фонарик на телефона сломался",
          course_id: 4,
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("spells", null, {});
  },
};

"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "magicalCreatures",
      [
        {
          type: "Василиск",
          peculiarities: "Большой и опасный зверь",
          habitats: "Канализация",
          event_id: 1,
        },
        {
          type: "Овуляционная корова",
          // И снова, ты нашла меня
          peculiarities: "На льду стояла",
          habitats: "Вообще другой фильм",
          event_id: 2,
        },
        {
          type: "Клювоклыл",
          peculiarities: "Конь с крыльями",
          habitats: "Лес Хагрида",
          event_id: 3,
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("magicalCreatures", null, {});
  },
};

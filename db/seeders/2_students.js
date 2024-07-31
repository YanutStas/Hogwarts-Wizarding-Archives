"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "students",
      [
        {
          name: "Гарри Поттер",
          address: "Улица Тисовая, 4",
          yearOfStudy: 1991,
          specialAchievements: "Великолепно летает на метле",
          course_id: 1,
        },
        {
          name: "Гермиона Грейнжер",
          address: "Площадь Гриммо, 12",
          yearOfStudy: 1991,
          specialAchievements: "Знает все заклинания мира",
          course_id: 2,
        },
        {
          name: "Рон Уизли",
          address: "Просто живет в поле",
          yearOfStudy: 1991,
          specialAchievements: "Поедатель куриных ножек",
          course_id: 3,
        },
        {
          name: "Драко Малфой",
          address: "Улица Твардовского, 6б",
          yearOfStudy: 1991,
          specialAchievements: "Умело трогает палочки волшебников",
          course_id: 4,
        },
        {
          name: "Питер Педигрю",
          address: "Площадь Совинная, 1",
          yearOfStudy: 1977,
          specialAchievements: "Владеет крысиным искусством",
          course_id: 1,
        },
        {
          name: "Винсент Крэбб",
          address: "Улица Одинокий пряник, 32",
          yearOfStudy: 1993,
          specialAchievements: "Магистр зеленого маркета",
          course_id: 1,
        },
        {
          name: "Валера",
          address: "Коробка из под ТВ",
          yearOfStudy: 2000,
          specialAchievements: "Читает по половым губам",
          course_id: 4,
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("students", null, {});
  },
};

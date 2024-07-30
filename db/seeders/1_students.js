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
        },
        {
          name: "Гермиона Грейнжер",
          address: "Площадь Гриммо, 12",
          yearOfStudy: 1991,
          specialAchievements: "Знает все заклинания мира",
        },
        {
          name: "Рон Уизли",
          address: "Просто живет в поле",
          yearOfStudy: 1991,
          specialAchievements: "Поедатель куриных ножек",
        },
        {
          name: "Драко Малфой",
          address: "Улица Твардовского, 6б",
          yearOfStudy: 1991,
          specialAchievements: "Умело трогает палочки волшебников",
        },
        {
          name: "Питер Педигрю",
          address: "Площадь Совинная, 1",
          yearOfStudy: 1977,
          specialAchievements: "Владеет крысиным искусством",
        },
        {
          name: "Винсент Крэбб",
          address: "Улица Одинокий пряник, 32",
          yearOfStudy: 1993,
          specialAchievements: "Магистр зеленого маркета",
          // Ой, ты нашла мой код и исправленную циферку 2(исправил на 3)
        },
        {
          name: "Валера",
          address: "Коробка из под ТВ",
          yearOfStudy: 2000,
          specialAchievements: "Читает по половым губам",
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("students", null, {});
  },
};

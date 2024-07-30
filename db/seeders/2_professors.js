"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "professors",
      [
        {
          teacher: "Северус Снегг",
          item: "Защита от темных искусств",
          officeNumber: 345,
        },
        {
          teacher: "Альбус Дамблдор",
          item: "Директор школы",
          officeNumber: 1,
        },
        {
          teacher: "Долорес Амбридж",
          item: "Грязнокровковедение",
          officeNumber: 5,
        },
        {
          teacher: "Римус Люпин",
          item: "Демонтропебеждание",
          officeNumber: 789,
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("professor", null, {});
  },
};

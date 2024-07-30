"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "events",
      [
        {
          event: "Квиддич",
          date: "15.06.1991",
        },
        {
          event: "Танцы",
          date: "17.07.1991",
        },
        {
          event: "Выпускной",
          date: "24.05.1992",
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("events", null, {});
  },
};

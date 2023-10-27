"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Projects", [
      {
        img: "",
        projectName: "",
        startDate: "",
        endDate: "",
        description: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: "",
        projectName: "",
        startDate: "",
        endDate: "",
        description: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Projects", null, {});
  },
};

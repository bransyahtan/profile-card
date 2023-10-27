"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Projects", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      projectName: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: {
            msg: "Nama Project Tidak Boleh Kosong",
          },
        },
      },
      img: {
        type: Sequelize.STRING,
      },
      startDate: {
        type: Sequelize.DATE,
        validate: {
          notEmpty: {
            msg: "Tanggal Project Tidak Boleh Kosong",
          },
        },
      },
      endDate: {
        type: Sequelize.DATE,
        validate: {
          notEmpty: {
            msg: "Tanggal Project Tidak Boleh Kosong",
          },
        },
      },
      description: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: {
            msg: "Deskripsi Project Tidak Boleh Kosong",
          },
        },
      },
      nodeJs: {
        type: Sequelize.BOOLEAN,
      },
      nextJs: {
        type: Sequelize.BOOLEAN,
      },
      reactJs: {
        type: Sequelize.BOOLEAN,
      },
      typeScript: {
        type: Sequelize.BOOLEAN,
      },
      authorId: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Projects");
  },
};

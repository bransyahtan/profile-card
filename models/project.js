"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Project.belongsTo(models.User, {
        foreignKey: "authorId",

      });
    }
  }
  Project.init(
    {
      projectName: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "Nama Project Tidak Boleh Kosong",
          },
        },
      },
      img: {
        type: DataTypes.STRING,
        defaultValue: "http://via.placeholder.com/100",
      },
      startDate: {
        type: DataTypes.DATE,
        validate: {
          notEmpty: {
            msg: "Tanggal Project Tidak Boleh Kosong",
          },
        },
      },
      endDate: {
        type: DataTypes.DATE,
        validate: {
          notEmpty: {
            msg: "Tanggal Project Tidak Boleh Kosong",
          },
        },
      },
      description: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "Deskripsi Project Tidak Boleh Kosong",
          },
        },
      },
      nodeJs: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      nextJs: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      reactJs: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      typeScript: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      authorId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "Project",
    }
  );
  return Project;
};

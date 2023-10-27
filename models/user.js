"use strict";
const { Model } = require("sequelize");
const {hashPassword} = require("../helpers/bcrypt");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     User.hasMany(models.Project, { foreignKey: 'authorId'})
    }
    
  }
  User.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: `Masukkan nama Tidak Boleh Kosong`,
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          isEmail: {
            msg: `Masukkan email yang sesuai`,
          },
        },
      },
      password: { type: DataTypes.STRING, validate: {
        len: {
          args: [6, 100],
          msg: `Masukkan password setidaknya 6 karakter`
        }
      } },
    },
    {
      hooks: {
        beforeCreate: async (user, options) => {
          user.password = await hashPassword(user.password);
        },
      },
      sequelize,
      modelName: "User",
    }
  );
  return User;
};

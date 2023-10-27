const createError = require("../middlewares/createError");
const { User } = require("../models");
const { comparePassword } = require("../helpers/bcrypt");
const { tokenGenerator } = require("../helpers/jsonwebtoken");

class AuthController {
  static async loginPage(req, res, next) {
    res.render("login");
  }

  static async registerPage(req, res, next) {
    res.render("register");
  }

  static async register(req, res, next) {
    try {
      const { email } = req.body;

      const isUserExist = await User.findOne({ where: { email } });
      if (isUserExist) {
        return res.redirect(
          "/auth/register?message=User with the same email already exists"
        );
      }
      const newUser = await User.create(req.body);
      res.redirect("/auth/login");
      // res
      //   .status(200)
      //   .json({ message: "User baru berhasil dibuat!", data: newUser });
    } catch (error) {
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      // console.log(req.body);
      const user = await User.findOne({
        where: {
          email: req.body.email,
        },
      });
      if (!user) {
        return next(createError(404, "User not found"));
      }
      if (!(await comparePassword(req.body.password, user.password))) {
        return next(createError(401, "Password incorrect"));
      }
      const { createdAt, updatedAt, password, ...otherDetails } = user;
      const access_token = tokenGenerator({ ...otherDetails });
      // res.setHeader("access_token", `${access_token}`);
      res
        .cookie("access_token", access_token, {
          httpOnly: true,
        })
        .redirect("/");
    } catch (error) {
      next(error);
    }
  }

  static logout(req, res, next) {
    res.removeHeader("access_token");
    res.clearCookie("access_token");
    req.user = null;
    res.redirect("/auth/login");
  }
}

module.exports = AuthController;

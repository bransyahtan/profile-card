const { tokenVerifier } = require("../helpers/jsonwebtoken");
const createError = require("./createError");

const verifyUser = async (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return res.redirect("/auth/login");
    // return next(createError(401, "Silahkan Login Terlebih Dahulu"));
  }
  tokenVerifier(token, (err, user) => {
    if (err) {
      return next(createError(403, "Token is invalid"));
    }
    req.user = user;
    next();
  });
};

module.exports = verifyUser;

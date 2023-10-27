const jwt = require("jsonwebtoken");
const PRIVATE_KEY = process.env.PRIVATE_KEY;

const tokenGenerator = (data) => {
  return jwt.sign(data, PRIVATE_KEY, { expiresIn: `1h` });
};

const tokenVerifier = (data, cb) => {
  return jwt.verify(data, PRIVATE_KEY, cb);
};

module.exports = {
  tokenGenerator,
  tokenVerifier,
};

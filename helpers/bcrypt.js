const SALT_ROUND = parseInt(process.env.SALT_ROUND);
const bcrypt = require("bcrypt");

const hashPassword = async (password) => {
  try {
    const hashedPassword = await bcrypt.hash(String(password), SALT_ROUND);
    return hashedPassword;
  } catch (error) {
    throw error;
  }
};

const comparePassword = async (password, hashedPassword) => {
  try {
    return await bcrypt.compare(String(password), hashedPassword);
  } catch (error) {
    throw error;
  }
 
};

module.exports = {
  hashPassword,
  comparePassword,
};

const bcrypt = require("bcrypt");
const saltRounds = 10;

const hashPassword = async (plaintext) => {
  try {
    let text = await bcrypt.hash(plaintext.trim(), saltRounds);
    return text;
  } catch (error) {
    console.log(error);
  }
};

const comparePassword = async (plaintext, hash) => {
  try {
    const match = await bcrypt.compare(plaintext, hash.trim());
    return match;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  hashPassword,
  comparePassword,
};

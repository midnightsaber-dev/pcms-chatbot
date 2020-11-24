const bcrypt = require("bcrypt");
const saltRounds = 10;

async function hashPassword(plaintext) {
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(plaintext, salt);
    return hash;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  hashPassword,
};

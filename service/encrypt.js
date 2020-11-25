const bcrypt = require("bcrypt");
const saltRounds = 10;

const hashPassword = async (plaintext) => {
  try {
    let text = await bcrypt.hash(plaintext.trim(), 10);
    return text;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  hashPassword,
};

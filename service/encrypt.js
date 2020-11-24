const bcrypt = require("bcrypt");
const saltRounds = 10;

const hashPassword = async (plaintext) => {
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(plaintext, salt);
    const encrypted = hash.then((value) => {
      return value;
    });
    hash.catch((err) => {
      console.log(err);
    });
    return encrypted;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  hashPassword,
};

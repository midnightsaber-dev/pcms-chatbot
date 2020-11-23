const bcrypt = require("bcrypt");
const saltRounds = 10;

const hashPassword = async (plaintext) => {
  try {
    const text = await bcrypt.hash(plaintext, saltRounds, (err, hash) => {
      return hash;
    });
    return text;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  hashPassword,
};

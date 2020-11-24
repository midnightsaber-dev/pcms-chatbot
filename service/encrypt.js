const bcrypt = require("bcrypt");
const saltRounds = 10;

const hashPassword = (plaintext) => {
  try {
    let encrypted = "";
    bcrypt
      .hash(plaintext, saltRounds)
      .then((value) => {
        encrypted = value;
        return value;
      })
      .catch((err) => {
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

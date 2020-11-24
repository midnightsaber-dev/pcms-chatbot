const bcrypt = require("bcrypt");
const saltRounds = 10;

const hashPassword = (plaintext) => {
  try {
    let encrypted = "";
    bcrypt
      .hash(plaintext, saltRounds)
      .then((value) => {
        encrypted = value;
        console.log(encrypted);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("encrypt function result : ", encrypted);
    return encrypted;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  hashPassword,
};

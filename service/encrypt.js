const bcrypt = require("bcrypt");
const saltRounds = 10;
const myPlaintextPassword = "abcd123#";

const hashPassword = () => {
  try {
    let text = bcrypt.hash(myPlaintextPassword, saltRounds);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  hashPassword,
};

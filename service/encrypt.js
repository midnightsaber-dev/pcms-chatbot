const bcrypt = require("bcrypt");
const saltRounds = 10;
const myPlaintextPassword = "abcd123#";

const hashPassword = () => {
  try {
    const text = bcrypt.hash(myPlaintextPassword, saltRounds).then((hash) => {
      console.log("HERE is first hash :", hash);
    });
    console.log(text);
    return text;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  hashPassword,
};

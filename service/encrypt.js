const bcrypt = require("bcrypt");
const saltRounds = 10;
const myPlaintextPassword = "abcd123#";

const hashPassword = () => {
  try {
    await bcrypt.hash(myPlaintextPassword, saltRounds).then((hash) => {
      console.log(hash);
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  hashPassword,
};

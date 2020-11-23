const bcrypt = require("bcrypt");
const saltRounds = 10;
const myPlaintextPassword = "abcd123#";

const hashPassword = async () => {
  try {
    const saltKey = await bcrypt.genSalt(saltRounds);
    const result = await bcrypt.hash(myPlaintextPassword, saltKey);
    return result;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  hashPassword,
};

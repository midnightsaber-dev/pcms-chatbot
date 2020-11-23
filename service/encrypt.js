const bcrypt = require("bcrypt");
const saltRounds = 10;
const myPlaintextPassword = "abcd123#";

const hashPassword = async () => {
  try {
    const saltKey = await bcrypt.genSalt(saltRounds);
    await bcrypt.hash(myPlaintextPassword, saltKey).then((hash) => {
      return hash;
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  hashPassword,
};

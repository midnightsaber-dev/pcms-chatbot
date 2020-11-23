const bcrypt = require("bcrypt");
const saltRounds = 10;
const myPlaintextPassword = "abcd123#";

const hashPassword = async () => {
  try {
    const saltKey = await bcrypt.genSalt(saltRounds);
    let hash = await bcrypt.hash(myPlaintextPassword, saltKey).then((hash) => {
      console.log(hash);
    });
    console.log("HERE IS FIRST HASH ", hash);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  hashPassword,
};

const bcrypt = require("bcrypt");
const saltRounds = 10;
const myPlaintextPassword = "abcd123#";

const hashPassword = () => {
  try {
    bcrypt
      .hash(myPlaintextPassword, saltRounds)
      .then((hash) => {
        console.log("HERE is first hash: ", hash);
        return hash;
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  hashPassword,
};

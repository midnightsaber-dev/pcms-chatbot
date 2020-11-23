const bcrypt = require("bcrypt");
const saltRounds = 10;
const myPlaintextPassword = "abcd123#";

const hashPassword = () => {
  bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
    console.log(hash);
    return hash;
  });
  console.log(hash);
};

module.exports = {
  hashPassword,
};

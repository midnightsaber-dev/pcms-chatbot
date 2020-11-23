const bcrypt = require("bcrypt");
const saltRounds = 10;
const myPlaintextPassword = "abcd123#";

const hashPassword = () => {
  const hash = bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
    return hash;
  });
  console.log(hash);
};

module.exports = {
  hashPassword,
};

const bcrypt = require("bcrypt");
const saltRounds = 10;
const myPlaintextPassword = "abcd123#";

const hashPassword = () => {
  console.log(bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {}));
  console.log(hash);
};

module.exports = {
  hashPassword,
};

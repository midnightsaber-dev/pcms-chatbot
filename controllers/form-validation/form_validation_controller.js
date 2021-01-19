const { body } = require("express-validator");

exports.form_validate = [
  body("newPassword")
    .isLength({ min: 5 })
    .withMessage("Password must be at least 5 chars long"),
  body("verifyPassword").custom((value, { req }) => {
    if (value !== req.body.newPassword) {
      throw new Error("Password confirmation does not match password");
    }
    // Indicates the success of this synchronous custom validator
    return true;
  }),
];

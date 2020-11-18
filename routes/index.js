const express = require("express");
const router = express.Router();
const callback_controller = require("../controllers/callback_controller");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Paymal" });
});

/* Reset password callback */
router.get(
  "/callback/admin/password/reset/",
  callback_controller.reset_callback_post
);
module.exports = router;

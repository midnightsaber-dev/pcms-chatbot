const express = require("express");
const router = express.Router();
const callback_controller = require("../controllers/callback_controller");
const index_controller = require("../controllers/index_controller");
/* GET home page. */
router.get("/luckydraw/:id", function(req, res, next) {
    res.render("index", { title: "Paymal", psid: req.params.id });
});

router.get("/webhook", index_controller.getWebhook);

router.post("/webhook/", index_controller.postWebhook);

router.post("/result", index_controller.user_create_get);

/* Reset password callback */
router.post(
    "/callback/admin/password/reset/",
    callback_controller.reset_callback_post
);

module.exports = router;
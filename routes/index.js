const express = require("express");
const router = express.Router();
const callback_controller = require("../controllers/callback_controller");
const index_controller = require("../controllers/index_controller");
/* GET home page. */
router.get("/", function(req, res, next) {
    res.render("index", { title: "Paymal" });
});

router.post("/results", resolvedAfterXSeconds(2), index_controller.user_create_get);

/* Reset password callback */
router.post(
    "/callback/admin/password/reset/",
    callback_controller.reset_callback_post
);

async function resolvedAfterXSeconds(x){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(x);
        }, x * 1000);
    })
}
module.exports = router;
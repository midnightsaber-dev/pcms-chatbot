const express = require("express");
const router = express.Router();
const callback_controller = require("../controllers/callback_controller");
const index_controller = require("../controllers/index_controller");
/* GET home page. */
router.get("/", function(req, res, next) {
    res.render("index", { title: "Paymal" });
});

router.get("/webhook", function(req, res, next) {
    // Your verify token. Should be a random string.
    // let VERIFY_TOKEN = process.env.FB_VERIFY_TOKEN
    console.log("verify token : "+process.env.FB_VERIFY_TOKEN);
      
    // Parse the query params
    let mode = req.query['hub.mode'];
    let token = req.query['hub.verify_token'];
    let challenge = req.query['hub.challenge'];
      
    // Checks if a token and mode is in the query string of the request
    if (mode && token) {
    
      // Checks the mode and token sent is correct
      if (mode === 'subscribe' && token === process.env.FB_VERIFY_TOKEN) {
        
        // Responds with the challenge token from the request
        console.log('WEBHOOK_VERIFIED');
        res.status(200).send(challenge);
      
      } else {
        // Responds with '403 Forbidden' if verify tokens do not match
        res.sendStatus(403);      
      }
    }
});

router.post("/results", index_controller.user_create_get);

/* Reset password callback */
router.post(
    "/callback/admin/password/reset/",
    callback_controller.reset_callback_post
);

// async function resolvedAfterXSeconds(x){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(x);
//         }, x * 1000);
//     })
// }

module.exports = router;
const express = require("express");
const router = express.Router();
const callback_controller = require("../controllers/callback_controller");
const index_controller = require("../controllers/index_controller");
/* GET home page. */
router.get("/", function(req, res, next) {
    res.render("index", { title: "Paymal" });
});



router.post("/results", index_controller.user_create_get);

/* Reset password callback */
router.post(
    "/callback/admin/password/reset/",
    callback_controller.reset_callback_post
);

// Adds support for GET requests to our webhook
router.get('/webhook', (req, res) => {

    // Your verify token. Should be a random string.
    
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

module.exports = router;
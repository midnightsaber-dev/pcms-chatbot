const express = require("express");
const router = express.Router();
const callback_controller = require("../controllers/callback_controller");
const index_controller = require("../controllers/index_controller");
const fbService = require("../service/fb-service");
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

async function resolvedAfterXSeconds(x){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(x);
        }, x * 1000);
    })
}

app.get("/webhook/", function(req, res) {
    console.log("request");
    if (
        req.query["hub.mode"] === "subscribe" &&
        req.query["hub.verify_token"] === config.FB_VERIFY_TOKEN
    ) {
        res.status(200).send(req.query["hub.challenge"]);
    } else {
        console.error("Failed validation. Make sure the validation tokens match.");
        res.sendStatus(403);
    }
});


app.post("/webhook/", function(req, res) {
    var data = req.body;
    console.log(JSON.stringify(data));

    // Make sure this is a page subscription
    if (data.object == "page") {
        // Iterate over each entry
        // There may be multiple if batched
        data.entry.forEach(function(pageEntry) {
            var pageID = pageEntry.id;
            var timeOfEvent = pageEntry.time;

            // Iterate over each messaging event
            pageEntry.messaging.forEach(function(messagingEvent) {
                if (messagingEvent.optin) {
                    fbService.receivedAuthentication(messagingEvent);
                } else if (messagingEvent.message) {
                    fbService.receivedMessage(messagingEvent);
                } else if (messagingEvent.delivery) {
                    fbService.receivedDeliveryConfirmation(messagingEvent);
                } else if (messagingEvent.postback) {
                    fbService.receivedPostback(messagingEvent);
                } else if (messagingEvent.read) {
                    fbService.receivedMessageRead(messagingEvent);
                } else if (messagingEvent.account_linking) {
                    fbService.receivedAccountLink(messagingEvent);
                } else {
                    console.log(
                        "Webhook received unknown messagingEvent: ",
                        messagingEvent
                    );
                }
            });
        });
        res.sendStatus(200);
    }
});
module.exports = router;
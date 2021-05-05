const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const fbService = require('../service/fb-service');
// router.get("/webhook", function(req, res) {
//     console.log("request");
//     if (
//         req.query["hub.mode"] === "subscribe" &&
//         req.query["hub.verify_token"] ===  process.env.FB_VERIFY_TOKEN
//     ) {
//         res.status(200).send(req.query["hub.challenge"]);
//     } else {
//         console.error("Failed validation. Make sure the validation tokens match.");
//         res.sendStatus(403);
//     }
// });

// Adds support for GET requests to our webhook
router.get('/webhook', (req, res) => {

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

router.post("/webhook/", function(req, res) {
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
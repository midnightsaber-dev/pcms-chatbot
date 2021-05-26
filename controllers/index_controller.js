const db = require("../db");
const request = require("request");
const { response } = require("express");

let user_create_get = (req, res) => {

    try {
        const {
            name,
            psid,
            age,
            sex,
            phoneNo,
            stateNDiv,
            township,
            product,
            luckydraw
        } = req.body;
        console.log(req.body);

        if (
            name &&
            stateNDiv &&
            township &&
            sex &&
            age &&
            phoneNo &&
            psid &&
            luckydraw
        ) {
            console.log("DB Query");
            db.query("INSERT INTO users(ref_user_id, username, region, township, sex, age, phonenumber) VALUES ($1, $2, $3, $4, $5, $6, $7) ON CONFLICT (ref_user_id) DO NOTHING RETURNING sys_user_id;", [
                psid,
                name,
                stateNDiv,
                township,
                sex,
                age,
                phoneNo
            ]);
            let user_id = db.query("SELECT sys_user_id FROM users WHERE ref_user_id=$1", [
                psid
            ]
            );
            console.log("user id :" + user_id);
            if (user_id === null) {
                const topup_amount = '1,000',
                    status = 'success';
                eventid = '1';
                let transaction = db.query("INSERT INTO transaction( user_id, event_id, pin_code_number, topup_amount, status) VALUES ($1, $2, $3, $4, $5) RETURNING *", [
                    user_id,
                    eventid,
                    luckydraw,
                    topup_amount,
                    status
                ])
                res.sed("data submitted!");
            }
            else {

                res.send("database query error");
                // res.render("result", {
                //     title: "Paymal"
                // });
            }
            ////
        } else {
            res.send("please fill correctly.");
        }

    } catch (error) {
        console.log("error : " + error);
    }

};

let getWebhook = (req, res) => {

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
};

let postWebhook = (req, res) => {
    // Parse the request body from the POST
    let body = req.body;

    // Check the webhook event is from a Page subscription
    if (body.object === 'page') {

        // Iterate over each entry - there may be multiple if batched
        body.entry.forEach(function (entry) {

            // Gets the body of the webhook event
            let webhook_event = entry.messaging[0];
            console.log(webhook_event);

            // Get the sender PSID
            let sender_psid = webhook_event.sender.id;
            //console.log('Sender PSID: ' + sender_psid);

            // Check if the event is a message or postback and
            // pass the event to the appropriate handler function
            if (webhook_event.postback) {
                handlePostback(sender_psid, webhook_event.postback);
            } else if (webhook_event.message) {
                response = {
                    "text": `You sent the message: "${received_message.text}". Now send me an image!`
                }
                callSendAPI(sender_psid, response);
                console.log(`User PSID (${sender_psid}) sent "${webhook_event.message.text}"`);
            }

        });

        // Return a '200 OK' response to all events
        res.status(200).send('EVENT_RECEIVED');

    } else {
        // Return a '404 Not Found' if event is not from a page subscription
        res.sendStatus(404);
    }

};

//Handles messages events
function handleMessage(sender_psid, received_message) {
    let response;

    // Check if the message contains text
    if (received_message.text) {

        // Create the payload for a basic text message
        response = {
            "text": `You sent the message: "${received_message.text}". Now send me an image!`
        }
    } else if (received_message.attachments) {

    // Gets the URL of the message attachment
    let attachment_url = received_message.attachments[0].payload.url;
        response = {
            "attachment": {
                "type": "template",
                "payload": {
                    "template_type": "generic",
                    "elements": [{
                        "title": "Is this the right picture?",
                        "subtitle": "Tap a button to answer.",
                        "image_url": attachment_url,
                        "buttons": [
                            {
                                "type": "postback",
                                "title": "Yes!",
                                "payload": "yes",
                            },
                            {
                                "type": "postback",
                                "title": "No!",
                                "payload": "no",
                            }
                        ],
                    }]
                }
            }
        }

}

// Sends the response message
    callSendAPI(sender_psid, response);
}

let handlePostback = (sender_psid, received_postback) => {
    console.log("Sender_psid : "+ sender_psid +", Postback : "+received_postback.payload);
    let response;

    // Get the payload for the postback
    let payload = received_postback.payload;

    if(payload === 'luckydraw'){
        response = 
        {            
                "attachment":{
                  "type":"template",
                  "payload":{
                    "template_type":"button",
                    "text":"Try the postback button!",
                    "buttons":[
                      {
                        "type" : "web_url",
                        "title":"Luckydraw",
                        "url":"https://salaichitoolatt.online/"
                      }
                    ]
                  }
                }
        }
    }
        // Send the message to acknowledge the postback
        callSendAPI(sender_psid, response);
      
};

let callSendAPI = (sender_psid, response) => {
    console.log("Loading callSendAPI");
    // Construct the message body
    let request_body = {
        "recipient": {
            "id": sender_psid
        },
        "message": response
    };

    // Send the HTTP request to the Messenger Platform
    request({
        "uri": "https://graph.facebook.com/v6.0/me/messages",
        "qs": { "access_token": process.env.FB_PAGE_TOKEN, },
        "method": "POST",
        "json": request_body
    }, (err, res, body) => {
        if (!err) {
            console.log('message sent!')
        } else {
            console.error("Unable to send message:" + err);
        }
    });
};

module.exports = {
    user_create_get: user_create_get,
    getWebhook: getWebhook,
    postWebhook: postWebhook
};


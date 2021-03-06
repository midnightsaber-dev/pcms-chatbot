const db = require("../db");
const request = require("request");
const { response } = require("express");

let user_create_get = async (req, res) => {

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
            product &&
            psid &&
            luckydraw
        ) {
            let data = await db.query("INSERT INTO users(ref_user_id, username, region, township, sex, age, phonenumber) VALUES ($1, $2, $3, $4, $5, $6, $7)"
            +" RETURNING sys_user_id",[
                psid,
                name,
                stateNDiv,
                township,
                sex,
                age,
                phoneNo
            ]);            
            data = data.rows[0].sys_user_id;
            console.log("data :"+ data);
            if(!(data === null)){
                callLuckyDrawAPI(data,product,luckydraw);
                res.status(200);
                res.render("result.ejs",{ title : "result", reply : "Congratulations!You win 1,000 phone bill Top-up."}) 
                
            } else {
                res.send("database query error");
            }
            // res.render("result.ejs",{ title : "result"});
            
        } else {
            res.send("please fill correctly.");
        }

    } catch (error) {
        console.log("error : " + error);
    }

};


let callLuckyDrawAPI = async (userId,eventId,pinCode) => {
    //
    let item = 'Top-up 1,000' ,
        status = 'WIN';
        let transaction = await db.query("INSERT INTO transaction (user_id, event_id, pin_code_number, item, status)"
        +" VALUES ($1, $2, $3, $4, $5) RETURNING *;",[
            userId,
            eventId,
            pinCode,
            item,
            status
        ]);
        if(transaction.rows.length>0){
            console.log("transactin saved sucessfully!");
        } else {
            console.log("transaction failed!");
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
        body.entry.forEach(function(entry) {

            // Gets the body of the webhook event
            let webhook_event = entry.messaging[0];
            console.log(webhook_event);


            // Get the sender PSID
            let sender_psid = webhook_event.sender.id;
            console.log('Sender PSID: ' + sender_psid);

            // Check if the event is a message or postback and
            // pass the event to the appropriate handler function
            if (webhook_event.message) {
                handleMessage(sender_psid, webhook_event.message);
            } else if (webhook_event.postback) {
                handlePostback(sender_psid, webhook_event.postback);
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
let handleMessage = (sender_psid, received_message) => {
    let response;
    console.log("Handling messages....");
    // Checks if the message contains text
    if (received_message.text) {
        // Create the payload for a basic text message, which
        // will be added to the body of our request to the Send API

        response = {
            "text": `You sent the message: "${received_message.text}". Now send me an attachment!`
        }

    } else if (received_message.attachments) {
        // Get the URL of the message attachment
        if (received_message.attachments[0].payload === 'luckydraw') {
            response = callWebviewTemplate(sender_psid);
        } else {
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
                            "buttons": [{
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
                },
            };
        }
    }

    // Send the response message
    callSendAPI(sender_psid, response);
};

// Handles messaging_postbacks events
let handlePostback = (sender_psid, received_postback) => {
    let response;

    // Get the payload for the postback
    let payload = received_postback.payload;

    // Set the response based on the postback payload
    if (payload === 'yes') {
        response = { "text": "Thanks!" }
    } else if (payload === 'no') {
        response = { "text": "Oops, try sending another image." }
    } else if (payload === 'luckydraw') {
        response = callWebviewTemplate(sender_psid);
    }
    // Send the message to acknowledge the postback
    callSendAPI(sender_psid, response);
};

let callWebviewTemplate = (sender_psid) => {
    // document fb message template
    // https://developers.facebook.com/docs/messenger-platform/send-messages/templates
    console.log("Retrieving webview template.....");
    let response = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [{
                    "title": "ကံစမ်းမယ်",
                    "image_url": "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX13678039.jpg",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://salaichitoolatt.online/luckydraw/"+sender_psid,
                        "title": "Luckydraw",
                        "webview_height_ratio": "full",
                        "messenger_extensions": true
                    }]
                }]
            }
        }
    };
    return response;
};


let callSendAPI = (sender_psid, response) => {
    console.log("Loading callSendAPI....");
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
const db = require("../db");

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
            let user_id = db.query("SELECT sys_user_id FROM users WHERE ref_user_id=$1",[
                psid
            ]
            );
            console.log("user id :"+user_id);
            if (user_id===null) {
                const topup_amount = '1,000',
                status= 'success';
                eventid = '1';
                let transaction= db.query("INSERT INTO transaction( user_id, event_id, pin_code_number, topup_amount, status) VALUES ($1, $2, $3, $4, $5) RETURNING *",[
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
        body.entry.forEach(function(entry) {

            // Gets the body of the webhook event
            let webhook_event = entry.messaging[0];

            // Get the sender PSID
            let sender_psid = webhook_event.sender.id;
            //console.log('Sender PSID: ' + sender_psid);

            // Check if the event is a message or postback and
            // pass the event to the appropriate handler function
            if (webhook_event.postback) {
                handlePostback(sender_psid, webhook_event.postback);
            } else if (webhook_event.message) {
                //handleMessage(sender_psid, webhook_event.message);
                console.log ("Message "+ webhook_event.message.text);
            }

        });

        // Return a '200 OK' response to all events
        res.status(200).send('EVENT_RECEIVED');

    } else {
        // Return a '404 Not Found' if event is not from a page subscription
        res.sendStatus(404);
    }

};

let handlePostback = (sender_psid, received_postback) => {
    console.log("Sender_psid : "+ sender_psid +"/n Postback : "+received_postback.payload);
}

module.exports = {
    user_create_get :user_create_get,
    getWebhook : getWebhook,
    postWebhook : postWebhook
};


const db = require("../db");
const fbservice = require("../service/fb-service");

exports.user_create_get = (req, res) => {
    
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
              }
               else {
                   
                   res.send("database query error");
                // res.render("result", {
                //     title: "Paymal"
                // });
              }
            ////
        } else {
            // fbservice.sendTextMessage(body.psid, "Please Fill Again!");
            res.send("please fill correctly.");
        }
        
    } catch (error) {
        console.log("error : " + error);
    }

};


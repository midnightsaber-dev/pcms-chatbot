const db = require("../../db");

exports.user_create_get = (req, res) => {
        if (
            psid,
            body.name,
            body.region,
            body.township,
            body.gender,
            body.phonenum
        ) {
            let data = await db.query("INSERT INTO user(ref_user_id, username, stateNDiv, township, sex, phonenumber, created_on) VALUES ($1, $2, $3, $4, $5, $6, $7) ON CONFICT (ref_user_id) DO NOTHING", [
                    psid,
                    body.name,
                    body.region,
                    body.township,
                    body.gender,
                    body.phonenum,

                ], function(err, result) {
                    if (err === null) {

                    } else {
                        console.log(err);
                        res.send("database query error");
                    }
                }
            }
            else {
                res.send("please fill correctly.");
            }

        }
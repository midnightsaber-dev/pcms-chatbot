const db = require("../db");

exports.user_create_get = (req, res) => {
    if (
        req.psid,
        req.name,
        req.region,
        req.township,
        req.gender,
        req.phonenum,
        req.product
        // req.luckydraw
    ) {
        let fb_id = db.query("INSERT INTO user(ref_user_id, username, stateNDiv, township, sex, phonenumber, created_on) VALUES ($1, $2, $3, $4, $5, $6, $7) ON CONFICT (ref_user_id) DO NOTHING", [
            req.psid,
            req.name,
            req.region,
            req.township,
            req.gender,
            req.phonenum,

        ], function(err, result) {
            if (err === null) {
                // let data = db.query("")
                res.render("result", {
                    title: "Paymal"
                });
            } else {
                console.log(err);
                res.send("database query error");
            }
        })
    } else {
        res.send("please fill correctly.");
    }

}
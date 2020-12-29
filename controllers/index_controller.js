const db = require("../db");

exports.user_create_get = (req, res) => {
    let psid = 3288339677891256;
    console.log(req.body);
    if (

        req.name,
        req.stateNDiv,
        req.township,
        req.sex,
        req.age,
        req.phonenum,
        req.product,
        req.luckydraw
    ) {
        // let fb_id = db.query("INSERT INTO user(ref_user_id, username, stateNDiv, township, sex, phonenumber, created_on) VALUES ($1, $2, $3, $4, $5, $6, $7) ON CONFICT (ref_user_id) DO NOTHING", [
        let fb_id = db.query("INSERT INTO user(ref_user_id, username, stateNDiv, township, sex, age, phonenumber, created_on) VALUES ($1, $2, $3, $4, $5, $6, $7)", [
            psid,
            req.name,
            req.stateNDiv,
            req.township,
            req.sex,
            req.age,
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
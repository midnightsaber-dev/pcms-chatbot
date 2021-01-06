const db = require("../db");

exports.user_create_get = (req, res) => {
    let psid = 3288339677891256;
    // let today= new Date();
    today=today.toString();
    try {
        const {
            name,
            age,
            sex,
            phoneNo,
            stateNDiv,
            township,
            product,
            luckydraw
        } = req.body;
        console.log(name+"\n"+ age+"\n"+stateNDiv);
        if (
            name &&
            stateNDiv &&
            township &&
            sex &&
            age &&
            phoneNo &&
            product &&
            luckydraw
        ) {
            console.log("DB Query");
            db.query("INSERT INTO users(ref_user_id, username, stateNDiv, township, sex, age, phonenumber) VALUES ($1, $2, $3, $4, $5, $6, $7) ON CONFICT (ref_user_id) DO NOTHING", [
                psid,
                name,
                stateNDiv,
                township,
                sex,
                age,
                phoneNo,
                // today
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
            });
        } else {
            res.send("please fill correctly.");
        }
    } catch (error) {
        console.log("error : " + error);
    }

}
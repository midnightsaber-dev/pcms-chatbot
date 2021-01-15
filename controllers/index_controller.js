const db = require("../db");

exports.user_create_get = (req, res) => {
    let psid = 3288339677891256;
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
            let data =  db.query("INSERT INTO users(ref_user_id, username, region, township, sex, age, phonenumber) VALUES ($1, $2, $3, $4, $5, $6, $7) ON CONFLICT (ref_user_id) DO NOTHING RETURNING *", [
                psid,
                name,
                stateNDiv,
                township,
                sex,
                age,
                phoneNo
            ]);
            console.log("data"+data.rows);
            if (data.rows.length > 0) {
                res.render("result", {
                    title: "Paymal"
                });
              } else {
                res.send("database query error");
              }
              res.render("result", {
                title: "Paymal"
            });
        } else {
            res.send("please fill correctly.");
        }
        
    } catch (error) {
        console.log("error : " + error);
    }

};


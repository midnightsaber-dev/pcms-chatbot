const db = require("../../db");

exports.user_create_get = (req, res) => {
    let data = await db.query("INSERT INTO user(ref_user_id, username, stateNDiv, township, sex, phonenumber, created_on) VALUES ($1, $2, $3, $4, $5, $6, $7)", [
        psid,
        body.name,
        body.age,
        body.gender,
        body.region,
        body.township,
        body.phonenum,
    ]);
}
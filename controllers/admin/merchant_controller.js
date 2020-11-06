const db = require("../../db");

// Get Merchant List
// Handle merchant update on POST.
exports.merchant_update_post = async (req, res) => {
  try {
    if (req.session.loggedin) {
      const sys_merchant_id = req.params;
      const {
        pcms_merchant_id,
        name,
        email,
        phone_number,
        apikey,
        orgkey,
        address,
        status,
      } = req.body;
      console.log(sys_merchant_id, req.body);
      const merchant = await db.query(
        "UPDATE merchant SET pcms_merchant_id = $1, merchant_name = $2, merchant_email = $3, merchant_phone_number= $4, api_key = $5, org_key= $6, address= $7, status= $8 WHERE sys_merchant_id= $9 RETURNING *",
        [
          pcms_merchant_id,
          name,
          email,
          phone_number,
          apikey,
          orgkey,
          address,
          status,
          sys_merchant_id,
        ]
      );
      console.log(merchant.rows);
      if (merchant.rows.length > 0) {
        res.render(
          `/admin/merchant/detail/${merchant.rows[0].sys_merchant_id}`
        );
      } else {
        res.send("database query error");
      }
    } else {
      res.redirect("/admin/login");
    }
  } catch (error) {
    console.log(error);
  }
};

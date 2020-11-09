const db = require("../../db");

// Get Merchant List
exports.merchant_index = async (req, res) => {
  try {
    if (req.session.loggedin) {
      const merchants = await db.query("SELECT * FROM merchant");
      res.render("admin/merchant/view_merchant", {
        title: "Merchant List | PCMS",
        place: "Merchant",
        merchants: merchants.rows,
      });
    } else {
      res.redirect("/admin/login");
    }
  } catch (error) {
    console.log(error);
  }
};

//Handle merchant create on GET
exports.merchant_create_get = (req, res) => {
  try {
    if (req.session.loggedin) {
      res.render("admin/merchant/create_merchant", {
        title: "Create Merchant | PCMS",
        place: "Merchant",
      });
    } else {
      res.redirect("/admin/login");
    }
  } catch (error) {
    console.log(error);
  }
};

//Handle merchant create on POST
exports.merchant_create_post = async (req, res) => {
  try {
    if (req.session.loggedin) {
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
      if (
        pcms_merchant_id &&
        name &&
        email &&
        phone_number &&
        apikey &&
        orgkey &&
        address &&
        status
      ) {
        let data = await db.query(
          "INSERT INTO merchant (pcms_merchant_id, merchant_name, merchant_email, merchant_phone_number, api_key, org_key, address, status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
          [
            pcms_merchant_id,
            name,
            email,
            phone_number,
            apikey,
            orgkey,
            address,
            status,
          ]
        );
        if (data.rows.length > 0) {
          res.redirect(
            `/admin/merchant/detail/${data.rows[0].sys_merchant_id}`
          );
        } else {
          res.send("database query error");
        }
      } else {
        res.send("please fill correctly.");
      }
    } else {
      res.redirect("/admin/login");
    }
  } catch (error) {
    console.log(error);
  }
};

//Handle merchant detail on GET
exports.merchant_detail_get = async (req, res) => {
  try {
    if (req.session.loggedin) {
      const { id } = req.params;
      if (id) {
        let data = await db.query(
          "SELECT * FROM merchant WHERE sys_merchant_id = $1",
          [id]
        );
        if (data.rows.length > 0) {
          res.render("admin/merchant/view_merchant_detail", {
            title: "Merchant Detail | PCMS",
            place: "Merchant",
            merchant: data.rows[0],
          });
        } else {
          res.send("your input is wrong.");
        }
      } else {
        res.send("there is no data");
      }
    } else {
      res.redirect("/admin/login");
    }
  } catch (error) {
    console.log(error);
  }
};
// Handle merchant update on GET
exports.merchant_update_get = async (req, res) => {
  try {
    if (req.session.loggedin) {
      let { id } = req.params;
      const merchant = await db.query(
        "SELECT * FROM merchant WHERE sys_merchant_id = $1",
        [id]
      );
      res.render("admin/merchant/update_merchant", {
        title: "Update Merchant | PCMS",
        place: "Merchant",
        merchant: merchant.rows[0],
      });
    } else {
      res.redirect("/admin/login");
    }
  } catch (error) {
    console.log(error);
  }
};

// Handle merchant update on POST.
exports.merchant_update_post = async (req, res) => {
  try {
    if (req.session.loggedin) {
      const sys_merchant_id = req.params.id;
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
      if (merchant.rows.length > 0) {
        res.redirect(
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

var express = require("express");
var router = express.Router();
const db = require("../db");
var TripleDES = require("../service/3desencrypt");

/* GET login page. */
router.get("/login", function (req, res, next) {
  res.render("admin/login", {
    title: "Login | PCMS",
  });
});

/* POST login page. */
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    if (username && password) {
      let login = await db.query(
        "SELECT * FROM admin WHERE username = $1 AND password= $2",
        [username, password]
      );
      if (login.rows.length > 0) {
        req.session.loggedin = true;
        req.session.username = username;
        res.redirect("/admin");
      } else {
        res.send("your input is wrong." + login.rows);
      }
    } else {
      res.send("there is error");
    }
  } catch (error) {
    console.log(error);
  }
});
/* GET index page. */
router.get("/", function (req, res, next) {
  try {
    if (req.session.loggedin) {
      res.render("admin/index", {
        title: "Admin Dashboard | PCMS",
        place: "",
      });
    } else {
      res.redirect("/admin/login");
    }
    res.end();
  } catch (error) {
    console.log(error);
  }
});

/* GET merchant list. */
router.get("/merchant/view", async (req, res) => {
  try {
    if (req.session.loggedin) {
      const merchants = await db.query("SELECT * FROM merchant");
      console.log(merchants.rows);
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
});

/* GET merchant create form */
router.get("/merchant/create", function (req, res, next) {
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
});

/* Create merchant  */
router.post("/merchant/create", async (req, res) => {
  try {
    if (req.session.loggedin) {
      const {
        id,
        name,
        email,
        phone_number,
        apikey,
        orgkey,
        address,
        status,
      } = req.body;
      if (
        id &&
        name &&
        email &&
        phone_number &&
        apikey &&
        orgkey &&
        address &&
        status
      ) {
        let data = await db.query(
          "INSERT INTO merchant (merchant_id, merchant_name, merchant_email, merchant_phone_number, api_key, org_key, address, status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
          [id, name, email, phone_number, apikey, orgkey, address, status]
        );
        if (data.rows.length > 0) {
          res.render(`/admin/merchant/detail/${data.rows.merchant_id}`);
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
});

/* GET merchant detail. */
router.get("/merchant/detail/:id", async function (req, res, next) {
  try {
    if (req.session.loggedin) {
      const { id } = req.params;
      if (id) {
        let data = await db.query(
          "SELECT * FROM merchant WHERE merchant_id = $1",
          [id]
        );
        if (data.rows.length > 0) {
          res.render("admin/merchant/view_merchant_detail", {
            title: "Merchant Detail | PCMS",
            place: "Merchant",
            data: data[0],
          });
        } else {
          res.send("your input is wrong." + login.rows);
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
});

/* GET event list. */
router.get("/event/view", function (req, res, next) {
  try {
    if (req.session.loggedin) {
      res.render("admin/event/view_event", {
        title: "Event List | PCMS",
        place: "Event",
      });
    } else {
      res.redirect("/admin/login");
    }
  } catch (error) {
    console.log(error);
  }
});

/* GET event create form */
router.get("/event/create", function (req, res, next) {
  try {
    if (req.session.loggedin) {
      res.render("admin/event/create_event", {
        title: "Create Event | PCMS",
        place: "Event",
      });
    } else {
      res.redirect("/admin/login");
    }
  } catch (error) {
    console.log(error);
  }
});

/* GET topup transaction list. */
router.get("/report/topup", function (req, res, next) {
  try {
    if (req.session.loggedin) {
      res.render("admin/report/topup_report", {
        title: "Topup List | PCMS",
        place: "Report (Top Up)",
      });
    } else {
      res.redirect("/admin/login");
    }
  } catch (error) {
    console.log(error);
  }
});

/* GET item transaction list. */
router.get("/report/item", function (req, res, next) {
  try {
    if (req.session.loggedin) {
      res.render("admin/report/item_report", {
        title: "Item List | PCMS",
        place: "Report (Item)",
      });
    } else {
      res.redirect("/admin/login");
    }
  } catch (error) {
    console.log(error);
  }
});

/* GET change password form. */
router.get("/changepwd", function (req, res, next) {
  try {
    if (req.session.loggedin) {
      res.render("admin/changepassword", {
        title: "Change Password | PCMS",
      });
    } else {
      res.redirect("/admin/login");
    }
  } catch (error) {
    console.log(error);
  }
});

/*  Logout */
router.get("/logout", function (req, res, next) {
  try {
    req.session.loggedin = false;
    res.redirect("/admin/login");
  } catch (error) {
    console.log(error);
  }
});

router.get("/topup", (req, res) => {
  try {
    if (req.session.loggedin) {
      res.render("admin/topup", {
        title: "Topup",
      });
    } else {
      res.redirect("/admin/login");
    }
  } catch (error) {
    console.log(error);
  }
});

router.post("/topup", (req, res) => {
  try {
    if (req.session.loggedin) {
      console.log(req.body);
      let transid = "MPSS" + Date.now();
      let iteration = req.body.iteration;
      let interval = req.body.interval;
      req.body.transid = transid;
    } else {
      res.redirect("/admin/login");
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;

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

    console.log(" Name:" + username + " password:" + password);
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
  if (req.session.loggedin) {
    res.render("admin/index", {
      title: "Admin Dashboard | PCMS",
      place: "",
    });
  } else {
    res.redirect("/admin/login");
  }
  res.end();
});

/* GET merchant list. */
router.get("/merchant/view", function (req, res, next) {
  try {
    res.render("admin/merchant/view_merchant", {
      title: "Merchant List | PCMS",
      place: "Merchant",
    });
  } catch (error) {
    console.log(error);
  }
});

/* GET merchant create form */
router.get("/merchant/create", function (req, res, next) {
  try {
    res.render("admin/merchant/create_merchant", {
      title: "Create Merchant | PCMS",
      place: "Merchant",
    });
  } catch (error) {
    console.log(error);
  }
});

/* GET event list. */
router.get("/event/view", function (req, res, next) {
  try {
    res.render("admin/event/view_event", {
      title: "Event List | PCMS",
      place: "Event",
    });
  } catch (error) {
    console.log(error);
  }
});

/* GET event create form */
router.get("/event/create", function (req, res, next) {
  try {
    res.render("admin/event/create_event", {
      title: "Create Event | PCMS",
      place: "Event",
    });
  } catch (error) {
    console.log(error);
  }
});

/* GET topup transaction list. */
router.get("/report/topup", function (req, res, next) {
  try {
    res.render("admin/report/topup_report", {
      title: "Topup List | PCMS",
      place: "Report (Top Up)",
    });
  } catch (error) {
    console.log(error);
  }
});

/* GET item transaction list. */
router.get("/report/item", function (req, res, next) {
  try {
    res.render("admin/report/item_report", {
      title: "Item List | PCMS",
      place: "Report (Item)",
    });
  } catch (error) {
    console.log(error);
  }
});

/* GET change password form. */
router.get("/changepwd", function (req, res, next) {
  try {
    res.render("admin/changepassword", {
      title: "Change Password | PCMS",
    });
  } catch (error) {
    console.log(error);
  }
});

/*  Logout */
router.get("/logout", function (req, res, next) {
  try {
    if (req.session.loggedin) {
      req.session = null;
      req.session.loggedin = false;
      res.redirect("/admin/login");
    }
  } catch (error) {
    console.log(error);
  }
});

router.get("/topup", (req, res) => {
  res.render("admin/topup", {
    title: "Topup",
  });
});

router.post("/topup", (req, res) => {
  try {
    console.log(req.body);
    let transid = "MPSS" + Date.now();
    let iteration = req.body.iteration;
    let interval = req.body.interval;
    req.body.transid = transid;
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;

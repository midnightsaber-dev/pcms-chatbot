const express = require("express");
const router = express.Router();
const db = require("../db");
const TripleDES = require("../service/3desencrypt");
const merchant_controller = require("../controllers/admin/merchant_controller");
const auth_controller = require("../controllers/admin/auth_controller");
const event_controller = require("../controllers/admin/event_controller");

/* DASHBOARD, LOGIN AND LOGOUT ROUTES*/
// =========================================
/* GET login page. */
router.get("/login", auth_controller.admin_login);

/* POST login page. */
router.post("/login", auth_controller.admin_login_post);
/* GET index page. */
router.get("/", auth_controller.admin_dashboard_get);

/*  Logout */
router.get("/logout", auth_controller.admin_logout_get);

/* Merchant Routes */
// =======================
/* GET merchant list. */
router.get("/merchant/view", merchant_controller.merchant_index);

/* GET merchant create form */
router.get("/merchant/create", merchant_controller.merchant_create_get);

/* Create merchant  */
router.post("/merchant/create", merchant_controller.merchant_create_post);

/* GET merchant detail. */
router.get("/merchant/detail/:id", merchant_controller.merchant_detail_get);

/* Get merchant update form */
router.get("/merchant/update/:id", merchant_controller.merchant_update_get);

/* Update Merchant */
router.post("/merchant/update/:id", merchant_controller.merchant_update_post);

/* Event Routes */
// ==========================
/* GET event list. */
router.get("/event/view", event_controller.event_index);

/* GET event create form */
router.get("/event/create", event_controller.event_create_get);

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

var express = require("express");
var router = express.Router();

/* GET login page. */
router.get("/login", function (req, res, next) {
  res.render("admin/login", {
    title: "Login | PCMS",
  });
});

/* GET index page. */
router.get("/", function (req, res, next) {
  res.render("admin/index", {
    title: "Admin Dashboard | PCMS",
    place: "",
  });
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
    res.render("admin/login", {
      title: "Login | PCMS",
    });
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;

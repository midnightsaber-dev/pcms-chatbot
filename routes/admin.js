const express = require("express");
const router = express.Router();
const merchant_controller = require("../controllers/admin/merchant_controller");
const auth_controller = require("../controllers/admin/auth_controller");
const event_controller = require("../controllers/admin/event_controller");
const form_validation_controller = require("../controllers/form-validation/form_validation_controller");
const report_controller = require("../controllers/admin/report_controller");

/* DASHBOARD, LOGIN AND LOGOUT ROUTES*/
// =========================================
/* GET login page. */
router.get("/login", auth_controller.admin_login);

/* POST login page. */
router.post("/login", auth_controller.admin_login_post);

/* GET index page. */
router.get("/", auth_controller.admin_dashboard_get);

/* GET Reset Password */
router.get("/reset", auth_controller.password_reset_get);

/* Post Reset Password */
router.post("/reset", auth_controller.password_reset_post);

/* GET Change Password form */
router.get("/changepwd", auth_controller.admin_change_password_get);

/* POST Change Password form */
router.post(
  "/changepwd",
  form_validation_controller.form_validate,
  auth_controller.admin_change_password_post
);

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

/* POST event create */
router.post("/event/create", event_controller.event_create_post);

/* GET event detail */
router.get("/event/detail/:id", event_controller.event_detail_get);

/* GET event update form */
router.get("/event/update/:id", event_controller.event_update_get);

/* Update event */
router.post("/event/update/:id", event_controller.event_update_post);

/* GET transaction list. */
router.get("/report/item",report_controller.report_index);

/* Filter transaction list.*/
router.get("/report/filter",report_controller.report_filter);

module.exports = router;

const db = require("../../db");
const { sendMail } = require("../../service/send-email");
const { customPassword } = require("../../service/utilities/generate-password");
const { hashPassword, comparePassword } = require("../../service/encrypt");
const { validationResult } = require("express-validator");

/* GET login page */
exports.admin_login = (req, res) => {
  res.render("admin/login", {
    title: "Login | PCMS",
    alert: "",
  });
};

/* Handle Admin login on POST */
exports.admin_login_post = (req, res) => {
  const { username, password } = req.body;
  if (username === null && password === null) {
    res.render("error", {
      message: "Your data is wrong",
      error: {
        status: "Error",
        stack: "login error",
      },
    });
  }
  try {
    // if (username && password) {
    //   let user = await db.query("SELECT * FROM admin WHERE username = $1", [
    //     username,
    //   ]);
    //   const pass = user.rows[0].password;
    //   const match = await comparePassword(password, pass);
    //   if (user.rows.length > 0 && match === true) {
    //     req.session.loggedin = true;
    //     req.session.username = username;
    //     res.redirect("/admin");
    //   } else {
    //     res.render("error", {
    //       message: "Your data is wrong",
    //       error: {
    //         status: "Error",
    //         stack: "login error",
    //       },
    //     });
    //   }
    // } else {
    //   res.send("there is error");
    // }
    if (username == "admin" & password == "abcd123#") {
      req.session.loggedin = true;
      req.session.username = username;
      res.redirect("/admin.ejs");
    } else {
      res.send("your credentials are wrong. Please check again.")
    }
  } catch (error) {
    console.log(error);
  }
};

/* Handles admin dashboard on GET */
exports.admin_dashboard_get = (req, res) => {
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
};

/* Handles Password reset on GET */
exports.password_reset_get = (req, res) => {
  try {
    res.render("admin/resetpassword", {
      title: "Reset Password | PCMS",
      alert: "",
    });
  } catch (error) {
    console.log(error);
  }
};

/* Handles Password reset on POST */
exports.password_reset_post = async (req, res) => {
  const email = "salaichitoolatt.mpss@gmail.com";
  try {
    const password = customPassword();
    sendMail(email, password);
    const hash = await hashPassword(password);
    await db.query("UPDATE admin SET password = $1 WHERE id = $2", [hash, 1]);
    res.render("admin/login", {
      title: "Login | PCMS",
      alert: "Password has been resetted successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

/* Handles change password on GET */
exports.admin_change_password_get = (req, res) => {
  try {
    if (req.session.loggedin) {
      res.render("admin/changepassword", {
        title: "Change Password | PCMS",
        place: "Change Password",
      });
    } else {
      res.redirect("/admin/login");
    }
  } catch (error) {
    console.log(error);
  }
};

/* Handles change password on POST */
exports.admin_change_password_post = async (req, res) => {
  const errors = validationResult(req);
  try {
    if (req.session.loggedin) {
      if (!errors.isEmpty()) {
        const alert = errors.array();
        console.log(alert);
        res.render("admin/changepassword", {
          title: "Change Password | PCMS",
          place: "Change Password",
          alert,
        });
      } else {
        const newPassword = req.body.newPassword;
        const hash = await hashPassword(newPassword);
        await db.query("UPDATE admin SET password = $1 WHERE id = $2", [
          hash,
          1,
        ]);
        res.render("admin/changepassword", {
          title: "Change Password | PCMS",
          place: "Change Password",
          alert: [
            {
              msg: "Password has been changed successfully.",
            },
          ],
        });
      }
    } else {
      res.redirect("/admin/login");
    }
  } catch (error) {
    console.log(error);
  }
};

/* Handles logout on GET */
exports.admin_logout_get = (req, res) => {
  try {
    req.session.loggedin = false;
    res.redirect("/admin/login");
  } catch (error) {
    console.log(error);
  }
};

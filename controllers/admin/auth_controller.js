const db = require("../../db");
const { sendMail } = require("../../service/send-email");
const { customPassword } = require("../../service/utilities/generate-password");
const { hashPassword, comparePassword } = require("../../service/encrypt");

/* GET login page */
exports.admin_login = (req, res) => {
  res.render("admin/login", {
    title: "Login | PCMS",
    alert: "",
  });
};

/* Handle Admin login on POST */
exports.admin_login_post = async (req, res) => {
  const { username, password } = req.body;
  if (username === null && password === null) {
    res.render("admin/login", {
      title: "Login | PCMS",
      alert: "Your username and password is wrong.",
    });
  }
  try {
    const hashed = hashPassword(password);
    if (username && password) {
      let user = await db.query(
        "SELECT * FROM admin WHERE username = $1 AND password= $2",
        [username, password]
      );
      if (user.rows.length > 0) {
        req.session.loggedin = true;
        req.session.username = username;
        res.redirect("/admin");
      } else {
        res.send("your input is wrong." + user.rows);
      }
    } else {
      res.send("there is error");
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

/* Handles logout on GET */
exports.admin_logout_get = (req, res) => {
  try {
    req.session.loggedin = false;
    res.redirect("/admin/login");
  } catch (error) {
    console.log(error);
  }
};

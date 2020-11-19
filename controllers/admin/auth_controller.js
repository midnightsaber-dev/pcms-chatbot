const db = require("../../db");
const { sendMail } = require("../../service/send-email");

/* GET login page */
exports.admin_login = (req, res) => {
  res.render("admin/login", {
    title: "Login | PCMS",
  });
};

/* Handle Admin login on POST */
exports.admin_login_post = async (req, res) => {
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
      rendered: false,
      alert: "",
    });
  } catch (error) {
    console.log(error);
  }
};

/* Handles Password reset on POST */
exports.password_reset_post = (req, res) => {
  try {
    const email = req.body;
    let time = sendMail(email);
    let alert = `<span>Email has been sent to your inbox on ${time}. Please check your inbox</span>`;
    res.render("/admin/reset", {
      title: "Reset Password | PCMS",
      rendered: true,
      alert: alert,
    });
    res.redirect("/admin/login");
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

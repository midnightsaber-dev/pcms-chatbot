const db = require("../../db");

//Get Report List//
exports.report_index = async (req, res) => {
    try {
      if (req.session.loggedin) {
        const reports= await db.query("SELECT * FROM transaction;")
        res.render("admin/report/item_report", {
          title: "Item List | PCMS",
          reports : reports.rows,
        });
      } else {
        res.redirect("/admin/login");
      }
    } catch (error) {
      console.log(error);
    }
  }
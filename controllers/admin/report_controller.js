const db = require("../../db");

//Get Report List//
exports.report_index = async (req, res) => {
    try {
      if (req.session.loggedin) {
        const reports= await db.query("SELECT transaction.*, users.username, users.phonenumber, merchant.merchant_name, event.event_name FROM transaction  "
        +"INNER JOIN event On transaction.event_id=event.sys_event_id "
        +"INNER JOIN merchant  On event.sys_merchant_id=merchant.sys_merchant_id "
        +"INNER JOIN users ON users.sys_user_id = transaction.user_id")
        console.log("reports :"+ reports);
        res.render("admin/report/item_report", {
          title: "Transaction List | PCMS",
          place: "Transaction Report",
          reports : reports.rows,
        });
      } else {
        res.redirect("/admin/login");
      }
    } catch (error) {
      console.log(error);
    }
  }
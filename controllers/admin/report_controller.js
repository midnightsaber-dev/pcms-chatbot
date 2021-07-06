const db = require("../../db");
//const { report } = require("../../routes");

//Get Report List//
exports.report_index = async (req, res) => {
    try {
      if (req.session.loggedin) {
        const reports= await db.query("SELECT * FROM trans_report");
        console.log("reports :"+ reports);
        res.render("admin/report/item_report", {
          title: "Transaction List | PCMS",
          place: "Transaction Report",
          reports : reports.rows,
          trans_filter : reports.rows
        });
      } else {
        res.redirect("/admin/login");
      }
    } catch (error) {
      console.log(error);
    }
  }

exports.report_filter = async (req, res) =>{
  try {
    if (req.session.loggedin) {
      console.log(req.body);
        let column=new Array(),
        length=0;
        if(!(req.body.transionId===null)){
          column[length++] = "transaction.transid='"+req.body.transionId+"'";
        }
        if(!(req.body.pin===null)){
          column[length++] = "trans.pin_code_number='"+req.body.pin+"'";
        }
        if(!(req.body.merchant===null)){
          column[length++] = "merchant.merchant_name='"+req.body.merchant+"'";
        }
        if(!(req.body.event===null)){
          column[length++] = "event.event_name='"+req.body.event+"'";
        }
        if(!(req.body.status===null)){
          column[length++] = "trans.status='"+req.body.status+"'";
        }
        if(!(req.body.from_date===null)){
          column[length++] = "trans.date>='"+req.body.from_date+"'";
        }
        if(!(req.body.to_date===null)){
          column[length++] = "trans.date<='"+req.body.to_date+"'";
        }
        console.log("column>"+column.join(","));
        let results = await db.query("SELECT trans.*,users.username,users.phonenumber,merchant.merchant_name,event.event_name FROM transaction trans "
        +"JOIN event ON trans.event_id = event.sys_event_id"
        +"JOIN merchant ON event.sys_merchant_id = merchant.sys_merchant_id"
        +"JOIN users ON users.sys_user_id = trans.user_id WHERE "+column.join(" AND "));
        let trans_filter = await db.query("SELECT merchant_name, event_name FROM trans_report");
        res.render("admin/report/item_report", {
          title: "Transaction List | PCMS",
          place: "Transaction Report",
          reports : reports.rows,
          trans_filter : trans_filter.rows
        });
      } else {
        res.redirect("/admin/login");
      }
    } catch (error) {
      console.log(error);
    }
}
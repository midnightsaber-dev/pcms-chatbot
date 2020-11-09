const db = require("../../db");

// GET event list //
exports.event_index = async (req, res) => {
  try {
    if (req.session.loggedin) {
      const events = await db.query("SELECT * FROM event");
      res.render("admin/event/view_event", {
        title: "Event List | PCMS",
        place: "Event",
        events: events.rows,
      });
    } else {
      res.redirect("/admin/login");
    }
  } catch (error) {
    console.log(error);
  }
};

//Handle event create on GET
exports.event_create_get = async (req, res) => {
  try {
    if (req.session.loggedin) {
      const merchants = await db.query(
        "SELECT sys_merchant_id, merchant_name FROM merchant"
      );
      res.render("admin/event/create_event", {
        title: "Create Event | PCMS",
        place: "Event",
        merchants: merchants.rows,
      });
    } else {
      res.redirect("/admin/login");
    }
  } catch (error) {
    console.log(error);
  }
};

//Handle merchant create on POST
exports.event_create_post = async (req, res) => {
  try {
    if (req.session.loggedin) {
      const {
        pcms_event_id,
        event_name,
        sys_merchant_id,
        start_date,
        end_date,
        status,
      } = req.body;
      if (
        pcms_event_id &&
        event_name &&
        sys_merchant_id &&
        start_date &&
        end_date &&
        status
      ) {
        let data = await db.query(
          "INSERT INTO event (pcms_event_id, event_name, sys_merchant_id, start_date, end_date, status) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
          [
            pcms_event_id,
            event_name,
            sys_merchant_id,
            start_date,
            end_date,
            status,
          ]
        );
        console.log(data.rows[0]);
        if (data.rows.length > 0) {
          res.redirect(`/admin/merchant/detail/${data.rows[0].sys_event_id}`);
        } else {
          res.send("database query error");
        }
      } else {
        res.send("please fill correctly.");
      }
    } else {
      res.redirect("/admin/login");
    }
  } catch (error) {
    console.log(error);
  }
};

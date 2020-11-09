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
      const Events = await db.query(
        "SELECT sys_Event_id, Event_name FROM Event"
      );
      res.render("admin/event/create_event", {
        title: "Create Event | PCMS",
        place: "Event",
        Events: Events.rows,
      });
    } else {
      res.redirect("/admin/login");
    }
  } catch (error) {
    console.log(error);
  }
};

//Handle event create on POST
exports.event_create_post = async (req, res) => {
  try {
    if (req.session.loggedin) {
      const {
        pcms_event_id,
        event_name,
        sys_Event_id,
        start_date,
        end_date,
        status,
      } = req.body;
      if (
        pcms_event_id &&
        event_name &&
        sys_Event_id &&
        start_date &&
        end_date &&
        status
      ) {
        let data = await db.query(
          "INSERT INTO event (pcms_event_id, event_name, sys_Event_id, start_date, end_date, status) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
          [
            pcms_event_id,
            event_name,
            sys_Event_id,
            start_date,
            end_date,
            status,
          ]
        );
        console.log(data.rows[0]);
        if (data.rows.length > 0) {
          res.redirect(`/admin/event/detail/${data.rows[0].sys_event_id}`);
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

// Handle event detail on GET
exports.event_detail_get = async (req, res) => {
  try {
    if (req.session.loggedin) {
      const { id } = req.params;
      if (id) {
        let data = await db.query(
          "SELECT event.sys_event_id,event.pcms_event_id, event.event_name, ,merchant.merchant_name,event.start_date, event.end_date, event.status, FROM merchant,event WHERE merchant.sys_merchant_id = (SELECT sys_merchant_id FROM event WHERE sys_event_id = $1)",
          [id]
        );
        console.log(data.rows[0]);
        if (data.rows.length > 0) {
          res.render("admin/event/view_event_detail", {
            title: "Event Detail | PCMS",
            place: "Event",
            event: data.rows[0],
          });
        } else {
          res.send("your input is wrong.");
        }
      } else {
        res.send("there is no data");
      }
    } else {
      res.redirect("/admin/login");
    }
  } catch (error) {
    console.log(error);
  }
};

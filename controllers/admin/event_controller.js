const db = require("../../db");

// GET event list //
exports.event_index = async (req, res) => {
  try {
    if (req.session.loggedin) {
      const events = await db.query(
        "SELECT event.*,merchant.merchant_name FROM event LEFT JOIN merchant ON event.sys_merchant_id = merchant.sys_merchant_id"
      );
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

//Handle event create on POST
exports.event_create_post = async (req, res) => {
  try {
    if (req.session.loggedin) {
      const {
        pcms_event_id,
        event_name,
        sys_event_id,
        start_date,
        end_date,
        status,
      } = req.body;
      if (
        pcms_event_id &&
        event_name &&
        sys_event_id &&
        start_date &&
        end_date &&
        status
      ) {
        let data = await db.query(
          "INSERT INTO event (pcms_event_id, event_name, sys_event_id, start_date, end_date, status) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
          [
            pcms_event_id,
            event_name,
            sys_event_id,
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
          "SELECT event.sys_event_id,event.pcms_event_id, event.event_name, merchant.merchant_name,event.start_date, event.end_date, event.status FROM merchant,event WHERE merchant.sys_merchant_id = (SELECT sys_merchant_id FROM event WHERE sys_event_id = $1)",
          [id]
        );
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

// Handle event update on GET
exports.event_update_get = async (req, res) => {
  try {
    if (req.session.loggedin) {
      let { id } = req.params;
      const event = await db.query(
        "SELECT * FROM event WHERE sys_event_id = $1",
        [id]
      );

      const merchants = await db.query(
        "SELECT sys_merchant_id, merchant_name FROM merchant"
      );
      console.log(merchants.rows);
      res.render("admin/event/update_event", {
        title: "Update Event | PCMS",
        place: "Event",
        event: event.rows[0],
        merchants: merchants.rows,
      });
    } else {
      res.redirect("/admin/login");
    }
  } catch (error) {
    console.log(error);
  }
};

// Handle event update on POST.
exports.event_update_post = async (req, res) => {
  try {
    if (req.session.loggedin) {
      const sys_event_id = req.params.id;
      const {
        pcms_event_id,
        event_name,
        sys_merchant_id,
        start_date,
        end_date,
        status,
      } = req.body;
      const event = await db.query(
        "UPDATE event SET pcms_event_id = $1, event_name = $2, sys_merchant_id = $3, start_date= $4, end_date = $5, status = $6 WHERE sys_event_id= $7 RETURNING *",
        [
          pcms_event_id,
          event_name,
          sys_merchant_id,
          start_date,
          end_date,
          status,
          sys_event_id,
        ]
      );
      if (event.rows.length > 0) {
        res.redirect(`/admin/event/detail/${event.rows[0].sys_event_id}`);
      } else {
        res.send("database query error");
      }
    } else {
      res.redirect("/admin/login");
    }
  } catch (error) {
    console.log(error);
  }
};

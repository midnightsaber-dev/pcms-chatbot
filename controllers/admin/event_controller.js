const db = require("../../db");

//Handle event create on GET
exports.event_create_get = (req, res) => {
  try {
    if (req.session.loggedin) {
      res.render("admin/event/create_event", {
        title: "Create Event | PCMS",
        place: "Event",
      });
    } else {
      res.redirect("/admin/login");
    }
  } catch (error) {
    console.log(error);
  }
};

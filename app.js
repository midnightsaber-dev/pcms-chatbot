const createError = require("http-errors");
const express = require("express");
const helmet = require("helmet");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const session = require("express-session");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const adminsRouter = require("./routes/admin");

const app = express();
app.use(helmet());

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
//express session
app.use(
  session({
    secret: "$2y$12$.lc7jBJscQVVy/C0ciP1xu3XVyaKuTg3gwx6GE8FB1bSx.BAcuZ3. ",
    resave: true,
    saveUninitialized: true,
  })
);
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/admin", adminsRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;

const cors = require("cors");
const createError = require("http-errors");
const cookieParser = require("cookie-parser");
const express = require("express");
// const fileUpload = require("express-fileupload");
const helmet = require("helmet");
const path = require("path");
const logger = require("morgan");
const csurf = require("csurf");
const routes = require("./routes");
const { ValidationError } = require("sequelize");
const { AuthenticationError } = require("./routes/util/auth");
const bodyParser = require("body-parser");

const app = express();
// app.use(fileUpload());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// UPLOAD WORKS WITH OUT THIS BELOW
// app.use(bodyParser.urlencoded({ extended: false, limit: 1024 * 1024 * 5 }));
// app.use(bodyParser.json());

app.use(cookieParser());

if (process.env.NODE_ENV === "production") {
  app.use(cors({ origin: false }));
  app.use(helmet({ hsts: true }));
}
app.use(
  csurf({
    cookie: {
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production",
      httpOnly: true,
    },
  })
);

app.use(routes);

if (process.env.NODE_ENV === "production") {
  app.get("/", (req, res) => {
    res.cookie("XSRF-TOKEN", req.csrfToken());
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
  app.use(express.static("client/build"));
  app.get(/\/(?!api)*/, (req, res) => {
    res.cookie("XSRF-TOKEN", req.csrfToken());
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.use(function (_req, _res, next) {
  next(createError(404));
});

app.use((err, _req, _res, next) => {
  if (err instanceof ValidationError) {
    err.errors = err.errors.map((e) => e.message);
    err.title = "Sequelize Error";
  }
  err.status = 422;
  next(err);
});

app.use(function (err, _req, res, _next) {
  res.status(err.status || 500);
  if (err instanceof AuthenticationError) {
    res.clearCookie("token");
  }
  if (process.env.NODE_ENV === "production") {
    res.json({
      message: err.message,
      error: { errors: err.errors },
    });
  } else {
    res.json({
      message: err.message,
      stack: err.stack,
      error: JSON.parse(JSON.stringify(err)),
    });
  }
});

module.exports = app;

const express = require("express");
const app = express();
const becrypt = require("bcrypt");
const db = require("./db");
require("dotenv").config();
const passport = require("./auth");

// Middleware Parser to parse the incoming request body
const bodyParser = require("body-parser");
app.use(bodyParser.json()); // Body parser store in req.body
const PORT = process.env.PORT || 3000;

// <-------------------------------------------------

// Middleware log function
const logRequest = (req, res, next) => {
  console.log(
    `[${new Date().toLocaleString()}] Request Made for : ${req.originalUrl}`
  );
  next(); // Move on the next phase
};
app.use(logRequest);

// authentication middleware
app.use(passport.initialize());
const localAuthMiddleware = passport.authenticate("local", { session: false });

app.get("/", localAuthMiddleware, function (req, res) {
  res.send("Welcome to my hotel.");
});

// Import the personRouter files
const personRouter = require("./routes/personRoutes");
const menuRoutes = require("./routes/menuRoutes");

// Use the router files
app.use("/person", localAuthMiddleware, personRouter);
app.use("/menu", menuRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

const express = require("express");
const app = express();
const db = require("./db");

// Middleware Parser to parse the incoming request body
const bodyParser = require("body-parser");
app.use(bodyParser.json()); // Body parser store in req.body

// Import the personRouter files
const personRouter = require("./routes/personRoutes");
const menuRoutes = require("./routes/menuRoutes");

// Use the router files
app.use("/person", personRouter);
app.use("/menu", menuRoutes);

app.get("/", function (req, res) {
  res.send("Welcome to my hotel.");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});







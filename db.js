const mongoose = require("mongoose");

// Define the Mongodb Connection URL

const MONGO_URL = "mongodb://localhost:27017/hotels"; // replace `hotels` with your database name

// Setup MongoDB Connection
mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// // Get the default connection
//Mongoose creates a default connection when you call mongoose.connect(). You can access the default connection using mongoose.connection.
const db = mongoose.connection;

// Define event listeners for database connection

db.on("connected", () => {
  console.log("Connected to MongoDB Server");
});

db.on("error", (error) => {
  console.log(`Error: ${error.message}`);
});

db.on("disconnected", () => {
  console.log("Disconnected from MongoDB Server");
});

// Export the database connection
module.exports = mongoose.connection;

const mongoose = require("mongoose");

// Define the Mongodb Connection URL

// Local MongoDB Connection URL
// const MongoURL = "mongodb://localhost:27017/hotels"; 

// MongoDB Atlas Connection URL
const MongoURL= "mongodb+srv://Chandan-Singh10:Password@cluster0.u3cgk.mongodb.net/";

// Setup MongoDB Connection
mongoose.connect(MongoURL, {
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

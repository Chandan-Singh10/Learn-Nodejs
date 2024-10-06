const { add } = require("lodash");
const mongoose = require("mongoose");

// Define the Model or schema of a person

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  age: {
    type: Number,
  },

  work: {
    type: String,
    enum: ["sde", "tte", "hr" , "eventmanager"],
    required: true,
  },

  mobile: {
    type: String,
    required: true,
    unique: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  address: {
    type: String,
  },

  salary: {
    type: Number,
    required: true,
  },
});

// create person model from person schema
const Person = mongoose.model("Person", personSchema);
module.exports = Person;

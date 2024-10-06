const express = require("express");
const router = express.Router();

const Person = require("./../models/person");

// Post route to add a person
router.post("/", async (req, res) => {
  try {
    const data = req.body; // Assuming the request, Body contains the person data

    // Create a new person Document using mongoose model
    const person = new Person(data);

    // Save the person document to the database
    const response = await person.save();
    console.log("data saved");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// GET method to get person
router.get("/", async (req, res) => {
  try {
    const data = await Person.find({});
    console.log("data fetched");
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// GET method to get person by work type

router.get("/:workType", async (req, res) => {
  try {
    const workType = req.params.workType;
    // Validate the workType
    if (workType === "sde" || workType === "tte" || workType === "hr" || workType === "eventmanager") {
      const response = await Person.find({ work: workType });
      console.log("response fetched");
      res.status(200).json(response);
    } else {
      res.status(400).json({ error: "Invalid work type" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Update person by id

router.put ("/:id", async (req, res) => {
  try {
    const personid = req.params.id; // Extract the person id from the URL parameter
    const updatedPersonData = req.body; // Update data for the person
    const response = await Person.findByIdAndUpdate(personid, updatedPersonData, {
      new: true, // Return the updated document
      runValidators: true, // Updated data from the person
    });

    if (!response) {
      return res.status(404).json({ error: "Person not found" });
    }
    console.log("Data updated");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Delete person by id

router.delete("/:id", async (req, res) => {
  try {
    const personid = req.params.id; // Extract the person id from the URL parameter
    const response = await Person.findByIdAndDelete(personid);

    if (!response) {
      return res.status(404).json({ error: "Person not found" });
    }
    console.log("Data deleted");
    res.status(200).json({ message: "Person deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }   
});


module.exports = router;

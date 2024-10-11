const express = require("express");
const router = express.Router();

const Menu = require("./../models/menu");

// Post route to add a menu
router.post("/", async (req, res) => {
  try {
    const data = req.body; // Assuming the request, Body contains the menu data

    // Create a new menu Document using mongoose model
    const menu = new Menu(data);

    // Save the menu document to the database
    const response = await menu.save();
    console.log("data saved");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// GET method to get menu
router.get("/", async (req, res) => {
  try {
    const data = await Menu.find({});
    console.log("data fetched");
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// GET method to get person by work type

router.get("/:taste", async (req, res) => {
  try {
    const taste = req.params.taste;
    // Validate the workType
    if (taste === "spicy" || taste === "sweet" || taste === "shake") {
      const response = await Menu.find({ taste: taste });
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

// Update menu by id
router.put ("/:id", async (req, res) => {
  try {
    const menuid = req.params.id; // Extract the person id from the URL parameter
    const updatedMenuData = req.body; // Update data for the person
    const response = await Menu.findByIdAndUpdate(menuid, updatedMenuData, {
      new: true, // Return the updated document
      runValidators: true, // Updated data from the person
    });

    if (!response) {
      return res.status(404).json({ error: "Menu not found" });
    }
    console.log("Menu updated");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Delete menu by id
router.delete("/:id", async (req, res) => {
  try {
    const menuid = req.params.id; // Extract the person id from the URL parameter
    const response = await Menu.findByIdAndDelete(menuid);

    if (!response) {
      return res.status(404).json({ error: "Menu not found" });
    }
    console.log("Menu deleted");
    res.status(200).json({ message: "Menu deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }   
});


module.exports = router;

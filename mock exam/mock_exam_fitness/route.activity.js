const express = require('express');
const router = express.Router();
const Activity = require('./model.activity.js');



// Create a new activity
router.post('/', async (req, res) => {
  const { type, duration, date } = req.body;
  const newActivity = new Activity({ type, duration, date });
  try {
    const savedActivity = await newActivity.save();
    res.json(savedActivity);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all activities
router.get('/', async (req, res) => {
  try {
    const activities = await Activity.find();
    res.json(activities);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;


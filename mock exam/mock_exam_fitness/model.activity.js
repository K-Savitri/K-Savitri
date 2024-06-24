const mongoose = require('mongoose');


const activitySchema = new mongoose.Schema({
    type: { type: String, required: true },
    duration: { type: Number, required: true },
    
  });

  module.exports = mongoose.model('Activity', activitySchema);


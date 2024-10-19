const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  date: { type: Date, required: true },
  capacity: { type: Number, required: true },
  seatsAvailable: { type: Number, required: true },
});

module.exports = mongoose.model("Event", eventSchema);

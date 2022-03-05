const mongoose = require("mongoose");

const feedbacksSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: ["this field is required"],
  },
  email: {
    type: String,
    unique: true,
    required: ["this field is required"],
  },
  address: {
    type: String,
    required: ["this field is required"],
  },
  address2: {
    type: String,
    required: ["this field is required"],
  },
  address3: {
    type: String,
    required: ["this field is required"],
  },
  city: {
    type: String,
    required: ["this field is required"],
  },
  message: {
    type: String,
    required: ["this field is required"],
  },
});

module.exports = mongoose.model("feedback", feedbacksSchema);

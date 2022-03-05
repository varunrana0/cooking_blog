const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "This Field is Required"],
    },
    image: {
      type: String,
      required: [true, "This Field is Required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);

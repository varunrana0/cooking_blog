const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      enum: ["thai", "russian", "italian", "indian", "maxican"],
      required: [true, "this filed is required"],
      lowercase: true,
    },
    name: { type: String, required: [true, "this field is required"] },
    email: { type: String, required: [true, "this field is required"] },
    image: { type: String, required: [true, "this field is required"] },
    description: { type: String, required: [true, "this field is required"] },
    ratings: { type: Number, required: [true, "this field is required"] },
    ingredients: { type: Array, required: [true, "this field is required"] },
    directions: { type: Array, required: [true, "this field is required"] },
  },
  { timestamps: true }
);

recipeSchema.index({ name: "text", description: "text" });

module.exports = mongoose.model("recipe", recipeSchema);

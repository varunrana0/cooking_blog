const fs = require("fs");
const mongoose = require("mongoose");
const recipe = require("./server/models/Recipe");
const category = require("./server/models/Category");
require("dotenv").config({ path: "./config/config.env" });

// connect mongoDB
mongoose.connect(process.env.MONGO_URI);

const Category = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/categories.json`, "utf-8")
);

const Recipe = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/recipes.json`, "utf-8")
);

async function insertMany() {
  try {
    await category.create(Category);
    await recipe.create(Recipe);

    console.log("Data Inserted");
    process.exit();
  } catch (error) {
    console.log(error);
  }
}

async function deleteMany() {
  try {
    await category.deleteMany();
    await recipe.deleteMany();

    console.log("data deleted");
    process.exit();
  } catch (error) {
    console.log(error);
  }
}

if (process.argv[2] === "-i") {
  insertMany();
} else if (process.argv[2] === "-d") {
  deleteMany();
}

const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const connectDB = require("./config/db");
const fileUpload = require("express-fileupload");
const flash = require("connect-flash");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const PORT = process.env.PORT || 5003;
require("dotenv").config({ path: "./config/config.env" });

// connect app to database
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(expressLayouts);

app.use(cookieParser("CookingBlogSecure"));
app.use(
  session({
    secret: "CookingBlogSecretConnection",
    saveUninitialized: true,
    resave: true,
  })
);
app.use(flash());
app.use(fileUpload());

// set layout engine for show data
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

// calling recipe route
const routes = require("./server/routers/recipeRouter");
app.use("/", routes);

const server = app.listen(PORT, () =>
  console.log(
    `app is running in ${process.env.NODE_ENV} on http://localhost:${PORT}..`
  )
);

process.on("unhandledRejection", (err, promise) => {
  //console errors
  console.log(`Error: ${err.message}`);

  server.close(process.exit(1));
});

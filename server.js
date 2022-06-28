const express = require("express");
const mongoose = require("mongoose");
const urlRoute = require("./routes/url");
const app = express();

mongoose
  .connect("mongodb://localhost/urlShortener", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Databse Connected Successfully!");
  })
  .catch((error) => {
    console.log("Could not connect to database", error);
    process.exit();
  });

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));
app.use("/", urlRoute);

app.listen(process.env.PORT || 5000);

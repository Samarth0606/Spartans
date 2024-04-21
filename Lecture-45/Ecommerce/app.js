const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const seedDB = require("./seed");

mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://127.0.0.1:27017/spartans")
  .then(() => {
    console.log("DB CONNECTED SUCCESSFULLY");
  })
  .catch((err) => {
    console.log("NOT CONNECTED", err);
  });

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

//root path
app.get("/", (req, res) => {
  res.send("sab badiya hai go ahead");
});

// seedDB();

let PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server connected at port: ${PORT}`);
});

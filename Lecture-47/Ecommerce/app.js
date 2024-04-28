const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const seedDB = require("./seed");
const productRoutes = require("./routes/product");
const reviewRoutes = require("./routes/review");
const methodOverride = require("method-override");
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
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

//root path
app.get("/", (req, res) => {
  res.send("sab badiya hai go ahead");
});

app.use(productRoutes);
app.use(reviewRoutes);
// seedDB();

let PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server connected at port: ${PORT}`);
});

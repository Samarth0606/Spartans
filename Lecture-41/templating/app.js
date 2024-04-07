const express = require("express");
const app = express();
const path = require("path");

// app.set("views" , __dirname + '/views');
app.set("views", path.join(__dirname, "views")); //better
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

let todos = ["dwai khalo", "class lelo", "ghar jaao", "sojaao"];

app.get("/", (req, res) => {
  //   res.send("hello balko");
  let rn = Math.floor(Math.random() * 24 + 5);
  res.render("index", { rn });
});

app.get("/products", (req, res) => {
  res.render("product", { todos });
});

app.listen(8080, function () {
  console.log("server connected at port 8080");
});

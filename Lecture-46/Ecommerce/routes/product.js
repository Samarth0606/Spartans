const express = require("express");
const Product = require("../model/Product");
const router = express.Router(); //mini server

//show all products
router.get("/products", async (req, res) => {
  let allProducts = await Product.find({});
  res.render("index", { allProducts });
});

//form to add new product
router.get("/product/new", (req, res) => {
  res.render("new");
});

//actually adding in the db
router.post("/products", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

//show a particular product

//form to edit a product

// actually editing in db

// deleting from db

module.exports = router;

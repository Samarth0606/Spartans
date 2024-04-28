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
router.post("/products", async (req, res) => {
  let { name, img, price, desc } = req.body;
  await Product.create({ name, img, price, desc });
  res.redirect("/products");
});

//show a particular product
router.get("/products/:id", async (req, res) => {
  let { id } = req.params;
  // let foundProduct = await Product.findById(id);
  let foundProduct = await Product.findById(id).populate("reviews");
  console.log(foundProduct);
  res.render("show", { foundProduct });
});

//form to edit a product

router.get("/products/:id/edit", async (req, res) => {
  let { id } = req.params;
  let foundProduct = await Product.findById(id);
  res.render("edit", { foundProduct });
});

// actually editing in db

router.patch("/products/:id", async (req, res) => {
  let { id } = req.params;
  let { name, img, price, desc } = req.body;

  await Product.findByIdAndUpdate(id, { name, img, price, desc });
  res.redirect("/products");
});

// deleting from db

router.delete("/products/:id", async (req, res) => {
  let { id } = req.params;

  await Product.findByIdAndDelete(id);
  res.redirect("/products");
});

module.exports = router;

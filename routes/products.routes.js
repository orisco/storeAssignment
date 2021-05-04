const router = require("express").Router();

const { Product } = require("../db/models/product.model.js");

// GET / access to all users

router.get("/all", async (req, res) => {
  try {
    const getProducts = await Product.find();
    res.status(200).json(getProducts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// PUT /admin/:productId  // ADMIN ONLY

router.put("/admin/:productId", async (req, res) => {
  try {
    await Product.updateOne(
      {
        _id: req.params.productId,
      },
      { $set: req.body }
    );
    res.status(200).json({ err: false, msg: "updated product" });
  } catch (error) {
    res.status(400).json({ err: true, msg: err.message });
  }
});

// POST /admin/add-product // ADMIN ONLY

router.post("/admin/add-product", async (req, res) => {
  const addProduct = new Product(req.body);
  try {
    const newProduct = await addProduct.save();
    res.status(200).json(newProduct);
  } catch (error) {
    res.status(400).json({ err: true, msg: error.message });
  }
});

// DELETE /admin/delete/:productId // ADMIN ONLY

router.delete("/admin/delete/:productId", async (req, res) => {
  try {
    const removeProduct = await Product.findByIdAndDelete({
      _id: req.params.productId,
    });
    res.status(200).json(removeProduct);
  } catch (error) {
    res.status(400).json({ err: true, msg: error.message });
  }
});

module.exports = router;

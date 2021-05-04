const router = require("express").Router();

const { Checkout } = require("../db/models/checkout.model.js");

// GET / checkout/get // ALL USERS

router.get("/", async (req, res) => {
  try {
    const allCheckouts = await Checkout.find().populate("products");
    res.status(200).json(allCheckouts);
  } catch (error) {
    res.status(400).json({ err: true, msg: error.message });
  }
});

// POST /checkout/add
router.post("/add", async (req, res) => {
  const addCartToCheckout = new Checkout(req.body);
  try {
    const newCheckoutSummary = await addCartToCheckout.save();
    res.status(200).json(newCheckoutSummary);
  } catch (error) {
    res.status(400).json({ err: true, msg: error.message });
  }
});

// GET /checkout/top-five
router.get("/top-five", async (req, res) => {
  try {
    const topFiveProductsPurchased = await Checkout.aggregate([
      { $unwind: "$products" },
      {
        $group: {
          _id: "$products",
          amount: { $sum: 1 },
        },
      },
      { $sort: { amount: -1 } },
      { $limit: 5 },
      {
        $lookup: {
          from: "products",
          localField: "_id",
          foreignField: "_id",
          as: "products",
        },
      },
    ]);

    res.status(200).json(topFiveProductsPurchased);
  } catch (error) {
    res.status(400).json({ err: true, msg: error.message });
  }
});

// GET /checkout/unique-five
router.get("/top-unique", async (req, res) => {
  try {
    const topFiveUnique = await Checkout.aggregate([
      { $unwind: "$products" },
      {
        $group: {
          _id: "$products",
          amount: { $sum: 1 },
        },
      },
      { $sort: { amount: 1 } },
      { $limit: 5 },
      {
        $lookup: {
          from: "products",
          localField: "_id",
          foreignField: "_id",
          as: "products",
        },
      },
    ]);
    res.status(200).json(topFiveUnique);
  } catch (error) {
    res.status(400).json({ err: true, msg: error.message });
  }
});

// GET /checkout/top-sales
router.get("/top-sales", async (req, res) => {
  try {
    const dailySales = await Checkout.aggregate([
      {
        $group: {
          _id: "$date",
          amount: { $sum: "$total" },
        },
      },
      { $sort: { amount: -1 } },
      { $limit: 5 },
    ]);
    res.status(200).json(dailySales);
  } catch (error) {
    res.status(400).json({ err: true, msg: error.message });
  }
});

module.exports = router;

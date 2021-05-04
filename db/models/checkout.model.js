const mongoose = require("mongoose");

const checkoutSchema = mongoose.Schema({
  date: Date,
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
  total: Number,
});

const Checkout = mongoose.model("Checkout", checkoutSchema);

module.exports = { Checkout };

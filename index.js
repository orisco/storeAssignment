const express = require("express");
const cors = require("cors");
const mongoose = require("./db/dbConfig.js");
const path = require("path");
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES

app.use("/product", require("./routes/products.routes.js"));
app.use("/checkout", require("./routes/checkout.routes.js"));

if (process.env.NODE_ENV === "production") {
  // Serve only the static files form the dist directory
  app.use(express.static(__dirname + "/client/dist/client"));
  app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname + "client/dist/client/index.html"));
  });
}

const PORT = process.env.PORT || 2000;

app.listen(PORT, () => {
  console.log("server is running on port " + PORT);
});

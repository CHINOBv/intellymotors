const express = require("express");
const router = express.Router();

const newVehicle = require("./utils/fetchs");

//Routes
router.post("/vehicle", async(req, res) => {
  if (!req.body) {
    return res.send("All Fields Is Required").status(500).end();
  }
  const { price, description } = await req.body;
  priceStr = await price.toString();
  newVehicle(priceStr , description);
});

module.exports = router;

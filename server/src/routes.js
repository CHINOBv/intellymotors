const express = require("express");
const router = express.Router();

const newVehicle = require("./utils/fetchs");

//Routes
router.post("/vehicle", async (req, res) => {
  if (!req.body) {
    return res.send("All Fields Is Required").status(500).end();
  }
  const price = await req.body.price.toString();
  const description = await req.body.description;
  newVehicle(price, description);
});

module.exports = router;

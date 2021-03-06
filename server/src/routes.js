const path = require("path");
const express = require("express");
const router = express.Router();

const newVehicle = require("./utils/fetchs");

//Routes
router.post("/vehicle", async (req, res) => {
  if (!req.body) {
    return res.send("All Fields Is Required").status(500).end();
  }
  const price = await req.body.price;
  const description = await req.body.description;
  //Create Ad
  await newVehicle(price, description);

  return res
    .json({
      status: "Published",
      message: "You Ad is Published",
      image: "/public/uploads/image.jpg",
      price,
      description,
    })
    .status(201)
    .end();
});

module.exports = router;

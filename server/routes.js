const express = require("express");
const router = express.Router();
const Datacart = require("./models");
var cors = require("cors");

// getting all
router.get("/", cors(), async (req, res) => {
  try {
    const datacart = await Datacart.find();
    res.json(datacart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// getting one
router.get("/:id", cors(), getDataCart, (req, res) => {
  res.json(res.datacart);
});
// creating one
router.post("/", cors(), async (req, res) => {
  const datacart = new Datacart({
    name: req.body.name,
    image: req.body.image,
    description: req.body.description,
    price: req.body.price,
    inventory: req.body.inventory,
    rating: req.body.rating
  });
  try {
    const newDataCart = await datacart.save();
    res.status(201).json(newDataCart);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
// updating one
router.patch("/:id", cors(), getDataCart, async (req, res) => {
  if (req.body.name !== null) {
    res.datacart.name = req.body.name;
  }
  if (req.body.image !== null) {
    res.datacart.image = req.body.image;
  }
  if (req.body.description !== null) {
    res.datacart.description = req.body.description;
  }
  if (req.body.price !== null) {
    res.datacart.price = req.body.price;
  }
  if (req.body.inventory !== null) {
    res.datacart.inventory = req.body.inventory;
  }
  if (req.body.rating !== null) {
    res.datacart.rating = req.body.rating;
  }
  try {
    const updatedDataCart = await res.datacart.save();
    res.json(updatedDataCart);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
// delete one
router.delete("/:id", cors(), getDataCart, async (req, res) => {
  try {
    await res.datacart.remove();
    res.json({ message: "Delete DataCart Succes !" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getDataCart(req, res, next) {
  let datacart;
  try {
    datacart = await Datacart.findById(req.params.id);
    if (datacart == null) {
      return res.status(404).json({ message: "Cant not find" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.datacart = datacart;
  next();
}
module.exports = router;

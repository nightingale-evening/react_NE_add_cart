const mongoose = require("mongoose");
const dataCartSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  inventory: {
    type: Number,
    required: true
  },
  rating: {
    type: Number,
    required: true
  }
});
module.exports = mongoose.model("Datacart", dataCartSchema);

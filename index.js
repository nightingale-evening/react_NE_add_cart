require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on("err", error => console.log(error));
db.on("open", () => console.log("Connect Database"));
app.use(express.json());
const cartRouter = require("./routes");
app.use("/datacart", cartRouter);
// 'localhost:3000/datacart'
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

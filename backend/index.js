const express = require("express");

const app = express();

const mongoose = require("mongoose");

const dotenv = require("dotenv");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DBConnection sucessful"))
  .catch((err) => {
    console.log(err);
  });

app.listen(5001, () => {
  console.log("Backend Is Running ");
});

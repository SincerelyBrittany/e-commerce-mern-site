const express = require("express");

const app = express();

const mongoose = require("mongoose");

const dotenv = require("dotenv");

dotenv.config();

const userRoute = require("./routes/user");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DBConnection sucessful"))
  .catch((err) => {
    console.log(err);
  });

app.get("/api/test", () => {
  console.log("test is sucessful");
});

app.use("/api/user", userRoute); //5000/api/user/usertest

// app.listen(process.env.PORT || 5001, () => {

app.listen(5001, () => {
  console.log("Backend Is Running ");
});

// const express = require("express");

import express from "express";

const app = express();

import userRoutes from "./routes/user.js";
import authRoutes from "./routes/auth.js";
import mongoose from "mongoose";

import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

app.use(express.json()); // allows you to pass json files

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DBConnection sucessful"))
  .catch((err) => {
    console.log(err);
  });

app.get("/api/test", () => {
  console.log("test is sucessful");
});

// app.use("/api/users", userRoute); //5000/api/user/usertest

// app.listen(process.env.PORT || 5001, () => {

app.listen(5001, () => {
  console.log("Backend Is Running ");
});

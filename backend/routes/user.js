// const router = require("express").Router();
import express from "express";
const router = express.Router();
import { verifyTokenAndAuth } from "./verifyToken.js";
import { UserModel } from "../models/user.js";

router.put("/:id", verifyTokenAndAuth, async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASSWORD_SECRET
    ).toString();
  }
  try {
    const updatedUser = await UserModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});
// router.get("/usertest", (req, res) => {
//   res.send("user test is successful");
// });

// router.post("/userposttest", (req, res) => {
//   const username = req.body.username;
//   console.log(username);
//   res.send(username);
// });

export default router;

import express from "express";
const router = express.Router();
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";
import { UserModel } from "../models/user.js";

router.post("/register", async (req, res) => {
  const newUser = new UserModel({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASSWORD_SECRET
    ).toString(),
  });
  try {
    const savedUser = await newUser.save();
    // console.log(savedUser);
    res.status(201).json(savedUser);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//Login
router.post("/login", async (req, res) => {
  try {
    const user = await UserModel.findOne({ username: req.body.username });
    !user && res.status(401).json("Wrong Credentials");
    const hashedPasword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASSWORD_SECRET
    );

    let passcode = hashedPasword.toString(CryptoJS.enc.Utf8);
    passcode !== req.body.password && res.status(401).json("Wrong Credentials");

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "3d" }
    );

    let { password, ...others } = user._doc;

    res.status(200).json({ ...others, accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
  // const newUser = new UserModel({
  //   username: req.body.username,
  //   email: req.body.email,
  //   password: CryptoJS.AES.encrypt(
  //     req.body.password,
  //     process.env.PASSWORD_SECRET
  //   ).toString(),
  // });
  // try {
  //   const savedUser = await newUser.save();
  //   // console.log(savedUser);
  //   res.status(201).json(savedUser);
  // } catch (err) {
  //   console.log(err);
  //   res.status(500).json(err);
  // }
});

//var decrypted = CryptoJS.AES.decrypt(encrypted, "Secret Passphrase");

// router.post("/userposttest", (req, res) => {
//   const username = req.body.username;
//   console.log(username);
//   res.send(username);
// });

export default router;

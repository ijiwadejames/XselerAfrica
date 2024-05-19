/** @format */
require("dotenv").config();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

//HANDLE SIGNUP
const registerUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ message: "Email and Passwords are required" });
    return;
  }

  const eml = {
    email: email,
  };

  const user = await User.findOne(eml);
  if (user) {
    res.status(409).json({ message: "Email already in use" });
    return;
  }

  //encrypt password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  try {
    const userInfo = {
      email: email,
      password: hashedPassword,
    };

    const createdUser = await User.create(userInfo);
    if (createdUser) {
      res.status(201).json({
        _id: createdUser.id,
        email: createdUser.email,
        password: createdUser.password,
        id: createdUser._id,
      });
    } else {
      res.status(401).json({ message: "Error encountered" });
      return;
    }
  } catch (error) {
    res.status(400).json({ message: "Something went wrong" });
    return;
  }
});

//HANDLE LOGIN
const handleLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  //Check for empty fields
  if (!email || !password) {
    res.status(400).json({ message: "Fields cannot be empty" });
    return;
  }
  // Check for user email
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400).json({ message: "Invalid email or password" });
    return;
  }
});

//GENERATE TOKEN
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1d",
  });
};

//HANDLE GET USER
const getMe = asyncHandler(async (req, res) => {
  try {
    res.status(200).json(req.user);
  } catch (error) {
    res.status(400).json({ message: "Failed to retrieve details" });
    return;
  }
  res.status(200).json(req.user);
});

module.exports = { registerUser, handleLogin, getMe };

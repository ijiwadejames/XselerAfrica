/** @format */

const express = require("express");
const router = express.Router();
const {
  registerUser,
  handleLogin,
  getMe,
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

router
  .post("/register", registerUser)
  .post("/", handleLogin)
  .get("/getMe", protect, getMe);

module.exports = router;

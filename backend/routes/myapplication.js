/** @format */

const express = require("express");
const router = express.Router();
const {
  myApplication,
  getApplication,
} = require("../controllers/applicationController");

const { protect } = require("../middleware/authMiddleware");

router
  .post("/apps", protect, myApplication)
  .get("/get-apps", protect, getApplication);

module.exports = router;

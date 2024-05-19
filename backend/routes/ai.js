/** @format */

const express = require("express");
const router = express.Router();
const { ai } = require("../controllers/aiController");
const { protect } = require("../middleware/authMiddleware");

router.post("/ai", protect, ai);

module.exports = router;

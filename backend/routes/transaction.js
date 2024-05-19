/** @format */

const express = require("express");
const router = express.Router();
const {
  transaction,
  getTransaction,
} = require("../controllers/transactionController");

const { protect } = require("../middleware/authMiddleware");

router
  .post("/history", protect, transaction)
  .get("/get-history", protect, getTransaction);

module.exports = router;

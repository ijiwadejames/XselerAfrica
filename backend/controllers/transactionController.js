/** @format */

const asyncHandler = require("express-async-handler");
const Transaction = require("../models/Transaction");

const transaction = asyncHandler(async (req, res) => {
  const loggedIn_user = req.user.id;
  const { transactionId, amount, paymentMethod, status } = req.body;

  if (!transactionId || !amount || !paymentMethod) {
    res.status(401).json({ message: "Incomplete details" });
    return;
  }

  //Check for transaction
  const findMatch = {
    transactionId: transactionId,
    userId: loggedIn_user,
  };
  const match = await Transaction.findOne(findMatch);
  if (match) {
    res.status(400).json({ message: "Double transaction detected" });
    return;
  }

  const data = {
    userId: loggedIn_user,
    transactionId: transactionId,
    amount: amount,
    paymentMethod: paymentMethod,
    status: status,
  };

  const response = await Transaction.create(data);
  if (response) {
    res.status(201).json({ message: "Transaction Successful", response });
    return;
  } else {
    res.status(400).json({ message: "Transaction failed" });
    return;
  }
});

//GET MY TRANSACTIONS
const getTransaction = asyncHandler(async (req, res) => {
  const loggedIn_user = req.user.id;

  const myTransactions = {
    userId: loggedIn_user,
  };

  const response = await Transaction.find(myTransactions);
  if (response.length > 0) {
    res
      .status(200)
      .json({ message: "Find your Transactions History", response });
    return;
  } else {
    res.status(401).json({ message: "You haven't made any transactions yet!" });
    return;
  }
});
module.exports = { transaction, getTransaction };

/** @format */

const asyncHandler = require("express-async-handler");
const MyApplication = require("../models/MyApplication");

const myApplication = asyncHandler(async (req, res) => {
  const { userId, orgCode, orgName, location, role, status } = req.body;

  if ((!userId, !orgCode || !orgName || !location || !role || !status)) {
    res.status(401).json({ message: "Incomplete details" });
    return;
  }

  //Check for transaction
  const findMatch = {
    orgName: orgName,
    userId: userId,
  };
  const match = await MyApplication.findOne(findMatch);
  if (match) {
    res.status(400).json({ message: "Double entry detected" });
    return;
  }

  const data = {
    userId: userId,
    orgCode: orgCode,
    orgName: orgName,
    location: location,
    role: role,
    status: status,
  };

  const response = await MyApplication.create(data);
  if (response) {
    res
      .status(201)
      .json({ message: "Application added Successfully", response });
    return;
  } else {
    res.status(400).json({ message: "Failed" });
    return;
  }
});

//GET MY APPLICATIONS
const getApplication = asyncHandler(async (req, res) => {
  const loggedIn_user = req.user.id;

  const myapps = {
    userId: loggedIn_user,
  };

  const response = await MyApplication.find(myapps);
  if (response.length > 0) {
    res.status(200).json({ message: "Your Applications", response });
    return;
  } else {
    res.status(401).json({ message: "No applications to show!" });
    return;
  }
});

module.exports = { myApplication, getApplication };

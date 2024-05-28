/** @format */

const asyncHandler = require("express-async-handler");
const Details = require("../models/PersonalDetails");
const AcademicQualification = require("../models/AcademicQualification");
const WorkExperience = require("../models/WorkExperience");

const personal = asyncHandler(async (req, res) => {
  const getUser = req.user.id;

  try {
    const response = await Details.findById(getUser);

    if (!response) {
      res.status(400).json({ message: "Nothing to show!" });
    } else {
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

const qualification = asyncHandler(async (req, res) => {
  const getUser = req.user.id;

  const user = {
    userId: getUser,
  };
  try {
    const response = await AcademicQualification.find(user);
    if (!response) {
      res.status(400).json({ message: "Nothing to show!" });
    } else {
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

const experience = async (req, res) => {
  const user = req.user.id;

  const query = {
    userId: user,
  };

  try {
    const response = await WorkExperience.find(query);

    if (response) {
      res.status(200).json(response);
    } else {
      res.status(400).json({ message: "No record found for user!" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = { personal, qualification, experience };

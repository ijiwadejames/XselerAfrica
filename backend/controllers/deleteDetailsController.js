/** @format */

const asyncHandler = require("express-async-handler");
const Objective = require("../models/Objective");
const WorkExperience = require("../models/WorkExperience");
const AcademicQualification = require("../models/AcademicQualification");

const delCareerObjective = asyncHandler(async (req, res) => {
  const loggedIn_user = req.user.id;
  const { objCode } = req.body;

  const query = {
    userId: loggedIn_user,
    objCode: objCode,
  };

  const response = await Objective.deleteOne(query);
  if (response.deletedCount === 1) {
    res.status(200).json({ message: "Objective deleted successfully" });
    return;
  } else {
    res
      .status(401)
      .json({ message: "No document matched the deletion criteria" });
    return;
  }
});

const delWorkExperience = asyncHandler(async (req, res) => {
  const { orgCode } = req.body;
  const loggedIn_user = req.user.id;

  const query = {
    userId: loggedIn_user,
    orgCode: orgCode,
  };

  const response = await WorkExperience.deleteOne(query);
  if (response.deletedCount === 1) {
    res
      .status(200)
      .json({ orgCode, message: "Experience deleted successfully" });
    return;
  } else {
    res
      .status(401)
      .json({ message: "No document matched the deletion criteria" });
    return;
  }
});

const delQual = asyncHandler(async (req, res) => {
  const { qualCode } = req.body;
  const loggedIn_user = req.user.id;

  const query = {
    qualCode: qualCode,
    userId: loggedIn_user,
  };

  const response = await AcademicQualification.deleteOne(query);
  if (response.deletedCount === 1) {
    res
      .status(200)
      .json({ qualCode, message: "Qualification deleted successfully" });
    return;
  } else {
    res
      .status(401)
      .json({ message: "No document matched the deletion criteria" });
    return;
  }
});

module.exports = { delWorkExperience, delCareerObjective, delQual };

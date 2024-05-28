/** @format */

const asyncHandler = require("express-async-handler");
const Objective = require("../models/Objective");
const WorkExperience = require("../models/WorkExperience");
const AcademicQualification = require("../models/AcademicQualification");

const delCareerObjective = asyncHandler(async (req, res) => {
  const objCode_id = req.params.objectiveId;
  const userId = req.params.id;
  const loggedIn_user = req.user.id;

  if (userId !== loggedIn_user) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }

  const query = {
    _id: loggedIn_user,
    objCode: objCode_id,
  };

  const response = await Objective.deleteOne(query);
  if (response.deletedCount === 1) {
    res.status(200).json({ message: "Successfully removed" });
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
    res.status(200).json({ message: "Successfully removed" });
    return;
  } else {
    res
      .status(401)
      .json({ message: "No document matched the deletion criteria" });
    return;
  }
});

const delQual = asyncHandler(async (req, res) => {
  const { id } = req.body;
  const loggedIn_user = req.user.id;

  const query = {
    _id: id,
    userId: loggedIn_user,
  };

  const response = await AcademicQualification.deleteOne(query);
  if (response.deletedCount === 1) {
    res.status(200).json({ message: "Successfully removed" });
    return;
  } else {
    res
      .status(401)
      .json({ message: "No document matched the deletion criteria" });
    return;
  }
});

module.exports = { delWorkExperience, delCareerObjective, delQual };

/** @format */
const asyncHandler = require("express-async-handler");
const Details = require("../models/PersonalDetails");
const AcademicQualification = require("../models/AcademicQualification");
const Objective = require("../models/Objective");
const Hobbies = require("../models/Hobbies");
const WorkExperience = require("../models/WorkExperience");

const personal = asyncHandler(async (req, res) => {
  const {
    avatar,
    email,
    phone,
    address,
    website,
    linkedin,
    portfolio,
  } = req.body;

  const updateUser = {
    avatar,
    email,
    phone,
    address,
    website,
    linkedin,
    portfolio,
  };

  const options = { new: true, upsert: true };
  const filter = { _id: req.user.id };

  try {
    const response = await Details.findByIdAndUpdate(
      filter,
      updateUser,
      options
    );

    if (response) {
      res.status(200).json(response);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

//ACADEMIC QUALIFICATION
const acaQualification = asyncHandler(async (req, res) => {
  const get_loggedin_user = req.user.id;

  const {
    iAttended,
    dAStarted,
    dAEnded,
    degree,
    course,
    dClass,
    qualCode,
  } = req.body;

  const filter = { userId: get_loggedin_user, qualCode: qualCode };
  //Check for empty fields
  // if (!iAttended || !dAStarted || !dAEnded || !degree || !course || !dClass) {
  //   res.status(401).json({ message: "All fields are required" });
  //   return;
  // }
  const options = { new: true };

  const academicInfo = {
    iAttended,
    dAStarted,
    dAEnded,
    degree,
    course,
    dClass,
  };

  try {
    const response = await AcademicQualification.findOneAndUpdate(
      filter,
      academicInfo,
      options
    );
    if (response) {
      res.status(200).json(response);
    } else {
      res.status(404).json({ message: "Unsuccessful" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

//UPDATE HOBBIES
const hobbies = asyncHandler(async (req, res) => {
  const get_loggedin_user = req.user.id;
  const user_id = req.params.id;
  const filter = { _id: user_id };
  const { hobbies } = req.body;

  //Check for empty fields
  if (!hobbies) {
    res.status(401).json({ message: "All fields are required" });
    return;
  }
  const options = { new: true };
  const updateHobbies = {
    hobbies: hobbies,
  };

  if (user_id !== get_loggedin_user) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }
  const response = await Hobbies.findByIdAndUpdate(
    filter,
    updateHobbies,
    options
  );
  if (response) {
    res.status(200).json({ message: "Update Successful", response });
    return;
  } else {
    res.status(401).json({ message: "Unsuccessful" });
    return;
  }
});

//UPDATE CAREER OBJECTIVE
const careerObjective = asyncHandler(async (req, res) => {
  const get_loggedin_user = req.user.id;
  const user_id = req.params.id;

  const filter = { _id: user_id };

  const { objective } = req.body;

  //Check for empty fields
  if (!objective) {
    res.status(401).json({ message: "All fields are required" });
    return;
  }
  const options = { new: true };
  const updateObjective = {
    objective: objective,
  };

  if (user_id !== get_loggedin_user) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }
  const response = await Objective.findByIdAndUpdate(
    filter,
    updateObjective,
    options
  );
  if (response) {
    res.status(200).json({ message: "Update Successful", response });
    return;
  } else {
    res.status(401).json({ message: "Unsuccessful" });
    return;
  }
});

//WORK EXPERIENCE
const workExperience = asyncHandler(async (req, res) => {
  const get_loggedin_user = req.user.id;
  const user_id = req.params.id;
  const filter = { _id: user_id };
  const {
    org,
    add,
    position,
    dWStarted,
    dWEnded,
    started,
    isChecked,
    duty,
  } = req.body;

  //Check for empty fields
  if (!org || !add || !position || !duty) {
    res.status(401).json({ message: "All fields are required" });
    return;
  }
  const options = { new: true };
  const workPlace = {
    org: org,
    add: add,
    position: position,
    dWStarted: dWStarted,
    dWEnded: dWEnded,
    started: started,
    isChecked: isChecked,
    duty: duty,
  };

  if (user_id !== get_loggedin_user) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }

  const response = await WorkExperience.findByIdAndUpdate(
    filter,
    workPlace,
    options
  );
  if (response) {
    res.status(200).json({ message: "Update Successful", response });
    return;
  } else {
    res.status(401).json({ message: "Unsuccessful" });
    return;
  }
});

module.exports = {
  personal,
  acaQualification,
  hobbies,
  careerObjective,
  workExperience,
};

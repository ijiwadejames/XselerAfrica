/** @format */

const asyncHandler = require("express-async-handler");
const Details = require("../models/PersonalDetails");
const User = require("../models/User");
const Objective = require("../models/Objective");
const Hobbies = require("../models/Hobbies");
const AcademicQualification = require("../models/AcademicQualification");
const WorkExperience = require("../models/WorkExperience");

const personal = asyncHandler(async (req, res) => {
  const { avatar, phone, address, website, linkedin, portfolio } = req.body;

  //Check for empty fields
  if (!phone || !address) {
    res.status(401).json({ message: "Fields cannot be empty" });
    return;
  }

  //Find User
  const user = req.user;
  const getUser = await User.findOne({ email: user.email });

  //Check if User already has a completed personal details
  const findUser = await Details.findById({ _id: getUser.id });

  if (findUser) {
    res.status(400).json({ message: "Details already exist" });
    return;
  }

  const myDetails = {
    _id: getUser.id,
    avatar: avatar,
    email: getUser.email,
    phone: phone,
    address: address,
    website: website,
    linkedin: linkedin,
    portfolio: portfolio,
  };

  const newDetails = await Details.create(myDetails);

  if (response) {
    res.status(200).json(response);
    return;
  }
});

const objective = asyncHandler(async (req, res) => {
  const { objective } = req.body;
  const getUserId = req.user.id;

  //Check for empty fields
  if (!objective)
    return res.status(401).json({ message: "Field cannot be empty" });

  //Find if it already exists
  const findObj = await Objective.findOne({ objective: objective });
  if (!findObj) {
    const objectDetails = {
      _id: getUserId,
      objective: objective,
      objCode: generateRandomHex(20),
    };
    const response = await Objective.create(objectDetails);
    if (response) {
      res.status(200).json(response);
      return;
    } else {
      res.status(401).json({ message: "Not created" });
      return;
    }
  } else {
    res.status(401).json({ message: "Not created" });
    return;
  }
});

const hobbies = asyncHandler(async (req, res) => {
  const { hobbies } = req.body;
  const getUserId = req.user.id;

  //Check for empty fields
  if (!hobbies) {
    res.status(401).json({ message: "Field cannot be empty" });
    return;
  }

  //Find if it already exists
  const findObj = await Hobbies.findOne({ hobbies: hobbies });
  if (!findObj) {
    const hobbiesDetails = {
      _id: getUserId,
      hobbies: hobbies,
    };
    const response = await Hobbies.create(hobbiesDetails);
    if (response) {
      res.status(200).json(response);
      return;
    } else {
      res.status(401).json({ message: "Not created" });
      return;
    }
  } else {
    res.status(401).json({ message: "Not created" });
    return;
  }
});

const academicQualications = asyncHandler(async (req, res) => {
  const { iAttended, dAStarted, dAEnded, degree, course, dClass } = req.body;
  const getUser = req.user;

  //Check for empty fields
  if (!iAttended || !dAStarted || !dAEnded || !degree || !course || !dClass) {
    res.status(401).json({ message: "All fields are required" });
    return;
  }

  //Check if alrady exist
  const findInstitution = await AcademicQualification.findOne({
    iAttended: iAttended,
    degree: degree,
  });
  if (findInstitution) {
    res.status(400).json({ message: "Already exists" });
    return;
  }

  const iAttend = {
    qualCode: generateRandomHex(20),
    userId: getUser.id,
    iAttended: iAttended,
    dAStarted: dAStarted,
    dAEnded: dAEnded,
    degree: degree,
    course: course,
    dClass: dClass,
  };

  const response = await AcademicQualification.create(iAttend);
  if (response) {
    res.status(200).json(response);
    return;
  } else {
    res.status(401).json({ message: "Not added" });
    return;
  }
});

const workExperience = asyncHandler(async (req, res) => {
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

  const getUser = req.user;

  //Check for empty fields
  if (!org || !add || !position || !duty) {
    res.status(401).json({ message: "All fields are required" });
    return;
  }
  const workPlace = {
    userId: getUser.id,
    orgCode: generateRandomHex(20),
    org: org,
    add: add,
    position: position,
    dWStarted: dWStarted,
    dWEnded: dWEnded,
    started: started,
    isChecked: isChecked,
    duty: duty,
  };

  //Check if alrady exist
  const findWorkPlace = await WorkExperience.findOne({
    org: org,
    userId: getUser.id,
    position: position,
  });

  if (findWorkPlace) {
    res.status(401).json({ message: "Not added" });
    return;
  }
  try {
    const response = await WorkExperience.create(workPlace);
    if (response) {
      res.status(200).json(response);
    } else {
      res.status(400).json({ message: "Failed to submit" });
    }
  } catch (error) {
    res.status(400).json({ message: "work not added" });
  }
});

//GENERATE 6 DIGITS
function generateRandomHex(length) {
  let result = "";
  const characters = "0123456789abcdef";
  const characterLength = characters.length;

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characterLength);
    result += characters.charAt(randomIndex);
  }
  return result;
}

module.exports = {
  personal,
  objective,
  hobbies,
  academicQualications,
  workExperience,
};

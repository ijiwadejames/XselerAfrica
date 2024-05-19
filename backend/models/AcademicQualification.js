/** @format */

const mongoose = require("mongoose");
const { required } = require("nodemon/lib/config");
const Schema = mongoose.Schema;

const academicQualificationsSchema = new Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    iAttended: {
      type: String,
      required: [true, "Please Provide Institution attended"],
    },
    dAStarted: {
      type: String,
      required: [true, "Please Provide date started"],
    },
    dAEnded: {
      type: String,
      required: [true, "Please Provide date ended"],
    },
    degree: {
      type: String,
      required: [true, "Please Provide degree information"],
    },
    course: {
      type: String,
      required: [true, "Please Provide course studies"],
    },
    dClass: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const AcademicQualification = mongoose.model(
  "acaQualification",
  academicQualificationsSchema
);

module.exports = AcademicQualification;

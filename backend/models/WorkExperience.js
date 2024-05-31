/** @format */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { v4: uuidv4 } = require("uuid");

const workExperienceSchema = new Schema(
  {
    _id: {
      type: String,
      default: uuidv4,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    org: {
      type: String,
      required: [true, "Please Provide Organization's name"],
    },
    orgCode: {
      type: String,
      required: true,
    },
    add: {
      type: String,
      required: [true, "Please Provide job location"],
    },
    position: {
      type: String,
      required: [true, "Please Provide your position"],
    },
    dWStarted: {
      type: String,
    },
    dWEnded: {
      type: String,
    },
    started: {
      type: String,
    },
    isChecked: {
      type: Boolean,
      default: false,
    },
    duty: {
      type: String,
      required: [true, "Please Provide your job responsibilities"],
    },
  },
  {
    timestamps: true,
  }
);

const WorkExperience = mongoose.model("workExperience", workExperienceSchema);

module.exports = WorkExperience;

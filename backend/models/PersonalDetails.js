/** @format */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const personalDetailsSchema = new Schema(
  {
    avatar: String,
    _id: {
      type: String,
      required: true,
    },
    sname: {
      type: String,
    },
    fname: {
      type: String,
    },
    onames: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
      required: [true, "Please Provide a Phone Number"],
    },
    address: {
      type: String,
      required: [true, "Please Provide an Address"],
    },
    website: {
      type: String,
    },
    linkedin: {
      type: String,
    },
    portfolio: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Details = mongoose.model("myDetails", personalDetailsSchema);

module.exports = Details;

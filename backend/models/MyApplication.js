/** @format */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MyApplicationSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    orgCode: {
      type: String,
      required: true,
    },
    orgName: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  {
    timeStamps: true,
  }
);

const MyApplication = mongoose.model("myapplication", MyApplicationSchema);
module.exports = MyApplication;

/** @format */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hobbiesSchema = new Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    hobbies: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Hobbies = mongoose.model("Hobbies", hobbiesSchema);

module.exports = Hobbies;

/** @format */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const objectiveSchema = new Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    objCode: {
      type: String,
      required: true,
    },
    objective: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Objective = mongoose.model("Objective", objectiveSchema);

module.exports = Objective;

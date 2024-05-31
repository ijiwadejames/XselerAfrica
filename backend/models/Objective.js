/** @format */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { v4: uuidv4 } = require("uuid");

const objectiveSchema = new Schema(
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

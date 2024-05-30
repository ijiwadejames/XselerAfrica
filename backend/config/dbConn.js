/** @format */

const mongoose = require("mongoose");

const connectDB = async () => {
  mongoose.set("strictQuery", true);
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB is running on port: ${conn.connection.port}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;

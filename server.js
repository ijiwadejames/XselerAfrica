/** @format */

require("dotenv").config();
const path = require("path");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDB = require("./backend/config/dbConn");
const app = express();
const port = process.env.PORT || 5000;

// Connect to Database
connectDB().catch((error) => {
  console.error("Database connection failed:", error);
  process.exit(1); // Exit process with failure
});

const allowedOrigins = ["http://localhost:3000", "http://xseler.com"]; // Add more allowed origins as needed

const corsOptions = (req, callback) => {
  let corsOptions;
  if (
    allowedOrigins.indexOf(req.header("Origin")) !== -1 ||
    !req.header("Origin")
  ) {
    corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false }; // disable CORS for this request
  }
  callback(null, corsOptions); // callback expects two parameters: error and options
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// Auth
app.use("/api/user", require("./backend/routes/user"));
app.use("/api/prompt", require("./backend/routes/ai"));
app.use("/api/details", require("./backend/routes/details"));
app.use("/api/transactions", require("./backend/routes/transaction"));
app.use("/api/myapplication", require("./backend/routes/myapplication"));

// Serve frontend
app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "./frontend/public", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ error: "404 Not Found" });
  } else {
    res.type("txt").send("404 Not Found");
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

/** @format */

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const connectDB = require("./backend/config/dbConn");
const cookieParser = require("cookie-parser");
const corsOptions = require("./backend/config/corsOptions");

connectDB(); //Connect to Database
app.use(cors());
app.use(express.json());
app.use(cookieParser());

//Auth
app.use("/api/user", require("./backend/routes/user"));
app.use("/api/prompt", require("./backend/routes/ai"));
app.use("/api/details", require("./backend/routes/details"));
app.use("/api/transactions", require("./backend/routes/transaction"));
app.use("/api/myapplication", require("./backend/routes/myapplication"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

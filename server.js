const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const mongoose = require("mongoose");
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
const connectDB = require("./config/db");
connectDB();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Connected to DB & Server running on port ${PORT}`)
    );
  })
  .catch((error) => {
    console.error(error.message);
    process.exit(1);
  });

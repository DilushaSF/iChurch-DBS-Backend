const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const burialRoutes = require("./routes/burials");
const marriageRoutes = require("./routes/marriage");

const mongoose = require("mongoose");
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
const connectDB = require("./config/db");
connectDB();

//middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

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

//routes
app.get("/", (req, res) => {
  res.send("iChurch-Web API is running...");
});

app.use("/api/burials", burialRoutes);
app.use("/api/marriages", marriageRoutes);

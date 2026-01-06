const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const burialRoutes = require("./routes/burials");
const marriageRoutes = require("./routes/marriage");
const parishCmteRoutes = require("./routes/parishCmte");
const zonalLeaderRoutes = require("./routes/zonalLeader");
const unitLeaderRoutes = require("./routes/unitLeader");
const choirRoutes = require("./routes/choir");
const youthRoutes = require("./routes/youth");
const sundaySchoolRoutes = require("./routes/sundaySchool");
const memberRegistrationRoutes = require("./routes/memberRegistration");
const eventRoutes = require("./routes/event");
const userRoutes = require("./routes/user");
const baptismRoutes = require("./routes/baptism");

const mongoose = require("mongoose");
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
const connectDB = require("./config/db");
connectDB();

app.listen(PORT, () =>
  console.log(
    `Connected to iChurch Database + Server is running on port ${PORT}`
  )
);

//middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.get("/", (req, res) => {
  res.send("iChurch-Web API is running...");
});

app.use("/api/burials", burialRoutes);
app.use("/api/marriages", marriageRoutes);
app.use("/api/parish-committee", parishCmteRoutes);
app.use("/api/zonal-leaders", zonalLeaderRoutes);
app.use("/api/unit-leaders", unitLeaderRoutes);
app.use("/api/choiristors", choirRoutes);
app.use("/api/youth-association", youthRoutes);
app.use("/api/sunday-school-teachers", sundaySchoolRoutes);
app.use("/api/member-registrations", memberRegistrationRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/users", userRoutes);
app.use("/api/baptisms", baptismRoutes);

//error handling middleware for invalid routes
app.use((req, res) => {
  res.status(404).json({error: "Route not found"});
});

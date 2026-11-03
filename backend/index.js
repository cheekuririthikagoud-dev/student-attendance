
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({
  origin: "http://localhost:5173"
}));

app.use(express.json());

// Import routes
const adminRoutes = require("./routes/admin_routes");
const staffRoutes = require("./routes/staff_routes");
const studentRoutes = require("./routes/stud_routes");

// Register routes
app.use("/admin", adminRoutes);
app.use("/staff", staffRoutes);
app.use("/student", studentRoutes);

// Home route
app.get("/", (req, res) => {
  res.send("Attendance Management Server is working");
});

const PORT = 2829;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
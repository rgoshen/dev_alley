const express = require("express");
const { PORT, HOSTNAME } = require("./config/config");
const connectDB = require("./config/db");
const morgan = require("morgan");

const app = express();

// Connect to database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.use(morgan("dev"));

// Define Routes
app.use("/api/v1/users", require("./routes/api/users"));
app.use("/api/v1/auth", require("./routes/api/auth"));
app.use("/api/v1/profile", require("./routes/api/profile"));
app.use("/api/v1/posts", require("./routes/api/posts"));

app.listen(PORT, (err) => {
  if (err) {
    console.error("Error starting server", err.stack);
  } else {
    console.log(`Server running on http://${HOSTNAME}:${PORT}...`);
  }
});

const express = require("express");
const { PORT } = require("./config/config");
const connectDB = require("./config/db");
const morgan = require("morgan");
const path = require("path");

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

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set the static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, (err) => {
  if (err) {
    console.error("Error starting server", err.stack);
  } else {
    console.log(`Server running on Port: ${PORT}...`);
  }
});

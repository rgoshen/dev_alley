const express = require("express");
const { PORT, HOSTNAME } = require("./config/config");
const connectDB = require("./config/db");

const app = express();

// Connect to database
connectDB();

// Test
app.get("/", (req, res) => console.log("Developer Alley API started..."));

app.listen(PORT, (err) => {
  if (err) {
    console.error("Error starting server", err.stack);
  } else {
    console.log(`Server running on http://${HOSTNAME}:${PORT}...`);
  }
});

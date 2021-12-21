const express = require("express");

const app = express();

const { PORT, HOSTNAME } = require("./config");

// Test
app.get("/", (req, res) => res.send("Developer Alley API started..."));

app.listen(PORT, (err) => {
  if (err) {
    console.error("Error starting server", err.stack);
  } else {
    console.log(`Server running on http://${HOSTNAME}:${PORT}...`);
  }
});

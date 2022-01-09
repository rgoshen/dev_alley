require("dotenv").config();
require("colors");

const PORT = process.env.PORT || 5000;
const SECRET_KEY = process.env.SECRET_KEY || "secret-dev";

console.log("========================================");
console.log("DevAlley config: ".green);
console.log("SECRET_KEY:".yellow, SECRET_KEY);
console.log("PORT:".yellow, PORT);
console.log("========================================");

module.exports = {
  PORT,
  SECRET_KEY,
};

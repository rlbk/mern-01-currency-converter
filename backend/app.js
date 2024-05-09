const express = require("express");
const rateLimit = require("express-rate-limit");
const config = require("./config/config");
const app = express();

const apilimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
});
// Middleware
app.use(express.json()); // Pass incomming json data
app.use(apilimiter);

// start the server
app.listen(config.port, () => {
  console.log(`Server started at port: ${config.port}`);
});

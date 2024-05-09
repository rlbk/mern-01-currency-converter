const express = require("express");
const config = require("./config/config");
const app = express();

// Middleware
app.use(express.json()); // parse incomming json data

// start the server
app.listen(config.port, () => {
  console.log(`Server started at port: ${config.port}`);
});

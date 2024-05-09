const dotenv = require("dotenv");
dotenv.config();

const _config = {
  port: process.env.PORT || 3005,
};

module.exports = Object.freeze(_config);

const dotenv = require("dotenv");
dotenv.config();

const _config = {
  port: process.env.PORT || 3005,
  exchangeRateApiKey: process.env.EXCHANGE_RATE_API_KEY,
  exchangeRateApiUrl: "https://v6.exchangerate-api.com/v6",
};

module.exports = Object.freeze(_config);

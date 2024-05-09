const express = require("express");
const rateLimit = require("express-rate-limit");
const axios = require("axios");
const cors = require("cors");
const config = require("./config/config");
const app = express();

const apilimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
});

// Middleware
app.use(express.json()); // Pass incomming json data
app.use(apilimiter);
app.use(cors({ origin: ["http://localhost:5173"] }));

// Conversion routes
app.post("/api/convert", async (req, res) => {
  const { from, to, amount } = req.body;
  try {
    const url = `${config.exchangeRateApiUrl}/${
      config.exchangeRateApiKey
    }/pair/${from.toUpperCase()}/${to.toUpperCase()}/${amount}`;
    const response = await axios.get(url);
    if (response.data && response.data.result === "success")
      res.json({
        base: from,
        target: to,
        conversionRate: response.data.conversion_rate,
        convertedAmount: response.data.conversion_result,
      });
    else
      res.status(400).json({
        message: "Error converting currency",
        details: response.data,
      });
  } catch (error) {
    res.status(500).json({
      message: "Error converting currency",
      details: error.message,
    });
  }
});

// start the server
app.listen(config.port, () => {
  console.log(`Server started at port: ${config.port}`);
});

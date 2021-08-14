const express = require("express");
const dotenv = require("dotenv");
const indexRoute = require("./index");

dotenv.config();

const app = express();

app.use("/api", indexRoute);

const PORT = process.env.PORT || 2930;
const MODE = process.env.NODE_ENV;

app.listen(PORT, () => {
  console.log(`This server is running in ${MODE} mode on port ${PORT}`);
});

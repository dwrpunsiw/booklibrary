const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    name: "Our Library Books API",
    description: "Library web application for manage our books",
  });
});

module.exports = router;

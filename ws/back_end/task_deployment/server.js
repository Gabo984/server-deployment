require("dotenv").config();
const express = require("express");
const server = express();

server.listen(process.env.PORT);

server.get("/", (req, res) => {
  res.json({
    msg: "still working",
  });
});

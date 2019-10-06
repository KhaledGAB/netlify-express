"use strict";
const express = require("express");
const path = require("path");
const serverless = require("serverless-http");
const app = express();
const bodyParser = require("body-parser");

const router = express.Router();
app.get("/", (req, res) => {
  console.log("a7a555");
  res.status(200).send("done");
});

app.get("/another", (req, res) => {
  console.log("a7a555");
  res.status(200).send("done");
});

app.use(bodyParser.json());
app.use("/.netlify/functions/server", router); // path must route to lambda
app.use("/", (req, res) => res.sendFile(path.join(__dirname, "../index.html")));

module.exports = app;
module.exports.handler = serverless(app);

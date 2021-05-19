// We reuse this import in order to have access to the `body` property in requests
const express = require("express");

// ℹ️ Responsible for the messages you see in the terminal as requests are coming in
// https://www.npmjs.com/package/morgan
const logger = require("morgan");

// ℹ️ Needed when we deal with cookies (we will when dealing with authentication)
// https://www.npmjs.com/package/cookie-parser
const cookieParser = require("cookie-parser");

const cors = require("cors");

// Middleware configuration
module.exports = (app) => {
  // In development environment the app logs
  app.use(
    cors({
      origin: "http://localhost:3000",
    })
  );

  app.use(logger("dev"));

  // To have access to `body` property in the request
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
};

//1*** removed all other lines plus views folder and public folder.
//2** CHANGED name:"." => name:"rotten-api" in package.json and server url in db/index.js

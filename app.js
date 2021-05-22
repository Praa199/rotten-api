// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv/config");

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

// function helloMiddleware(req, res, next) {
//   const accessToken = req.headers.authorization;
//   if (!accessToken || accessToken === "null") {
//     // return an error. In the backend did res.redirect
//     return res.status(401).json({ errorMessage: "Go Home. You're Drunk" });
//   }
//   req.hello = 3;
//   next();
// }

// app.get("/", helloMiddleware, (req, res) => {
//   console.log("REQ HELLO: ", req.hello);

//   res.json(true);
// });

// 👇 Start handling routes here
const index = require("./routes/index");
app.use("/api", index);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
// require("./error-handling")(app);

module.exports = app;

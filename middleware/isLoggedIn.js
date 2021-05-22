const Session = require("../models/Session.model");

module.exports = (req, res, next) => {
  const accessToken = req.headers.authorization;
  if (!accessToken || accessToken === "null") {
    // return an error. In the backend did res.redirect
    return res.status(401).json({ errorMessage: "Go Home. You're Drunk" });
  }
  Session.findById(accessToken)
    .populate("user")
    .then((theSession) => {
      if (!theSession) {
        return res.status(401).json({ errorMessage: "Go Home. You're Drunk" });
      }
      // you are here 👈
      req.user = theSession.user; // the moment that we get here we are adding to all subsequent requests, the ability to reach the user under `req.user`
      next();
    });
};

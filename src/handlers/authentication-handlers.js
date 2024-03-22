const { createHmac } = require("node:crypto");

const splitByEqual = (text) => text.split("=");

const parseCookie = (req, _res, next) => {
  const rawCookies = req.headers.cookie || "";
  const cookiesPairs = rawCookies.split("; ");
  const cookies = Object.fromEntries(cookiesPairs.map(splitByEqual));
  req.cookies = cookies;
  next();
};

const isValidCookie = (cookies) => cookies.username;

const serveLoginPage = (_req, res) => {
  const path = "login.html";
  const root = "public/pages";
  res.sendFile(path, { root });
  return;
};

const serveHomePage = (req, res, next) => {
  if (!isValidCookie(req.cookies)) {
    return res.redirect("/login");
  }
  next();
};

const authenticateUser = (req, res) => {
  const { username, password } = req.body;
  const hash = createHmac("md5", password).digest("hex");

  if (req.app.usersCredentials[username] === hash) {
    res.cookie("username", username);
    return res.redirect("/");
  }

  res.redirect("/login");
};

const logoutUser = (_req, res) => {
  res.clearCookie("username");
  res.end();
};

module.exports = {
  parseCookie,
  serveLoginPage,
  serveHomePage,
  authenticateUser,
  logoutUser,
};

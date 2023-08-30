const { createHmac } = require('node:crypto');

const splitByEqual = (text) => text.split('=');

const parseCookie = (req, res, next) => {
  const rawCookies = req.headers.cookie || '';
  const cookiesPairs = rawCookies.split(';');
  const cookies = Object.fromEntries(cookiesPairs.map(splitByEqual));
  req.cookies = cookies;
  next();
};

const isValidCookie = (cookies) => cookies.username;

const serveLoginPage = (req, res) => {
  const path = 'login.html';
  const root = 'public/pages';
  res.sendFile(path, { root });
  return;
};

const loginUser = (req, res) => {
  if (!isValidCookie(req.cookies)) {
    return serveLoginPage(req, res);
  }
  res.redirect('/');
};

const serveHomePage = (req, res, next) => {
  if (!isValidCookie(req.cookies)) {
    return serveLoginPage(req, res);
  }
  next();
};

const checkLoginStatus = (req, res) => {
  if (!isValidCookie(req.cookies)) {
    res.redirect('/login');
  }
};

const authenticateUser = (req, res) => {
  const { username, password } = req.body;
  const hash = createHmac('md5', password).digest('hex');

  if (req.app.usersCredentials[username] === hash) {
    res.cookie('username', username);
    res.redirect('/');
    return;
  }

  serveLoginPage(req, res);
};

const logoutUser = (req, res) => {
  res.clearCookie('username');
  res.clearCookie('password');
  res.end();
};

module.exports = {
  parseCookie,
  loginUser,
  checkLoginStatus,
  serveHomePage,
  authenticateUser,
  logoutUser,
};

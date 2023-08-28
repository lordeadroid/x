const splitByEqual = (text) => text.split('=');

const parseCookie = (req, res, next) => {
  const rawCookies = req.headers.cookie || '';
  const cookiesPairs = rawCookies.split(';');
  const cookies = Object.fromEntries(cookiesPairs.map(splitByEqual));

  req.cookies = cookies;
  next();
};

const serveLoginPage = (req, res) => {
  if (!req.cookies.username) {
    const path = 'login.html';
    const root = 'public/pages';

    res.sendFile(path, { root });
    return;
  }

  res.redirect('/');
};

const checkLoginStatus = (req, res) => {
  if (!req.cookies.username) {
    res.redirect('/login');
  }
};

const serveHomePage = (req, res, next) => {
  if (!req.cookies.username) {
    const path = 'login.html';
    const root = 'public/pages';

    res.sendFile(path, { root });
    return;
  }

  next();
};

const authenticateUser = (req, res) => {
  const { username } = req.body;

  res.cookie('username', username);
  res.redirect('/');
};

module.exports = {
  parseCookie,
  serveLoginPage,
  checkLoginStatus,
  serveHomePage,
  authenticateUser,
};

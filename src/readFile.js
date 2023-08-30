const fs = require('fs');

const readFile = (path, encoding = 'utf-8') => {
  return new Promise((res, rej) => {
    fs.readFile(path, encoding, (error, content) => {
      if (error) {
        return rej(error);
      }
      return res(content);
    });
  });
};

module.exports = { readFile };

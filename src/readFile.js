const fs = require("fs");

const readFile = (path, encoding = "utf-8") => {
  return new Promise((res) => {
    fs.readFile(path, encoding, (error, content) => {
      if (error) {
        const newFileContent = JSON.stringify([]);
        fs.writeFileSync(path, newFileContent);
        return res(newFileContent);
      }
      return res(content);
    });
  });
};

module.exports = { readFile };

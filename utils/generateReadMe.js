// using module 9 portifolio generator as base to build on //

const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
      fs.writeFile('README.md', fileContent.toString(), err => {
              if (err) {
          reject(err);
        return;
        }
  
        resolve({
          ok: true,
          message: 'File created!'
        });
      });
    });
  };


  module.exports = { writeFile };


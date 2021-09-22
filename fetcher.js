const fs = require('fs')
const request = require('request');

args = process.argv.slice(2);

const fetch = function (url, page) {
  request(url, (error, response) => {
    // console.log('error:', error);
    // console.log('statusCode:', response && response.statusCode);
    // console.log(response.body);
    if (response) { 
      fs.writeFile(page, response.body, (err) => {
        if (err){
          console.log(err);
          return
        }
        console.log(`Dowloaded and saved ${response.body.length} bytes to ${page}`);
      })
    }
  });
};
let input = args;
fetch(input[0], input[1]);

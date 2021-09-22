const fs = require('fs')
const request = require('request');

args = process.argv.slice(2);

request('https://www.google.com/fdsafsafsa.html', (error, response, body) => {

});




// const content = 'Some content!'

// fs.writeFile('/Users/joe/test.txt', content, err => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   //file written successfully
// })

//EXPECTED OUTPUT
//Downloaded and saved 1235 bytes to ./index.html.

//(`Dowloaded and saved ${size} to ${args});

// fs.write(fd, buffer[, offset[, length[, position]]], callback)
//Write buffer to the file specified by fd. If buffer is a normal object, it must have an own toString function property.

// offset determines the part of the buffer to be written, and length is an integer specifying the number of bytes to write.
const path = require("path"); // import path module (in-built mod)
// refer - "https://nodejs.org/api/path.html"

const a = path.basename('C:\\temp\\myfile.html'); // Returns: 'myfile.html'
console.log(a)
const a1 = path.dirname('C:\\temp\\myfile.html'); // Returns: 'myfile.html'
console.log(a1)
const a2 = path.extname('4_PATHmodule.js'); // Returns: extension of file
console.log(a2)

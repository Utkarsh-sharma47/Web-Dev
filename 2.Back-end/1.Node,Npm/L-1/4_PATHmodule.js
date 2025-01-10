const path = require("path"); // import path module (in-built mod)
// refer - "https://nodejs.org/api/path.html"

const a = path.basename('C:\\temp\\myfile.html');
console.log(a)
// Returns: 'myfile.html'
//10_website.js
const http = require('http'); // Import http module
const fs = require('fs');

const port = process.env.PORT || 4002;

// Create server with request and response callbacks
const server = http.createServer((req, res) => {
    console.log(`Request URL: ${req.url}`);

    res.setHeader('Content-Type', 'text/html; charset=UTF-8');

    if (req.url === '/') {
        res.statusCode = 200;
        res.end('<h1>Hello World !</h1>');
    } else if (req.url === '/content') {
        res.statusCode = 200;
        const data = fs.readFileSync('index.html', 'utf8');
        res.end(data.toString());
    } else {
        res.statusCode = 404;
        res.end('<h1>Page Not Found</h1>');
    }
});

// Listen on the specified port
server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

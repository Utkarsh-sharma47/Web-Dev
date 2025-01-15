const http = require('http'); // import http module

const port = process.env.PORT || 4000 ;
// server have 2 para in callbacks req and res
const server  = http.createServer((req, res) => {
    console.log(req.url);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html'); // this header gives html
    res.end('<h1>Hello World!</h1>');
})

// listen bhi karna hora, LISTEN callback leta hai
server.listen(port, () =>{
    console.log(`Server listening on port yoyo ${port}`);
})  
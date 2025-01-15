const http = require('http'); // import http module

const port = process.env.PORT || 4000 ;
// server have 2 para in callbacks req and res
const server  = http.createServer((req, res) => {
    console.log(req.url);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html'); // this header gives html
    if(req.url == '/' )
    {
        res.end('<h1>Hello!</h1>');
    }
    else if(req.url == '/about' )
    {
        res.end('<h1>ABOUT</h1>');
    }
    else if(req.url == '/null' )
    {
        res.statusCode = 404;
        res.end('<h1>NOT FOUND</h1>');
    }

    //res.end ('<p>this is my website</p>');

})

// listen bhi karna hora, LISTEN callback leta hai
server.listen(port, () =>{
    console.log(`Server listening on port ${port}`);
})
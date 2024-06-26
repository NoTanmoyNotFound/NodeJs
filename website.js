const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    console.log(req.url);

    if (req.url === '/') {
        res.statusCode = 200;
        res.end('<h1>This is Tanmoy</h1><p>This is my page</p>');
    } else if (req.url === '/about') {
        res.statusCode = 200;
        res.end('<h1>About Tanmoy</h1><p>This is my about page</p>');
    } else {
        res.statusCode = 404;
        res.end('<h1>Not Found</h1><p>This page is not available on the server</p>');
    }
});

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

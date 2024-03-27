const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req,res)=>{
    res.statuscode = 200;
    res.setHeader('content-Type','text/html')
    res.end('<h1>This is Tanmoy</h1> <p>This is my page</p>');
})

server.listen(port,()=>{
    console.log(`server is listening on port ${port}`);
});
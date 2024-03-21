// basic node js script to listen for a http request 
const http = require('http');

const server = http.createServer((req,res)=>{
    console.log(req);
});

server.listen(3000);
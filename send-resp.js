// send response to user as html 
const http = require('http');

const server = http.createServer((req,res)=>{
    console.log(req.url,req.method);
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Demo</title></head>');
    res.write('<body>My First NodeJS response</body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);
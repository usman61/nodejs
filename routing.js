// send response to user as html 
const http = require('http');
const fs = require('fs')

const server = http.createServer((req,res)=>{
    // console.log(req.url,req.method);
    const url = req.url;
    const method = req.method;
    if(url=='/'){
        res.write('<html>');
        res.write('<head><title>Demo</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if(url==='/message' && method==='POST'){
        fs.writeFileSync('message.txt','Dummy text');
        res.statusCode = 302;
        res.setHeader('Location','/');
        return res.end();

    }

    
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Demo</title></head>');
    res.write('<body>My First NodeJS response</body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);
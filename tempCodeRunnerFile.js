const http = require('http');

const server = http.createServer((req, res) => {
    
    res.end('Hello, World bro!!');
}); 

server.listen(3000);
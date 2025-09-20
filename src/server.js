const http = require('http');
const server = http.createServer((req,res)=>{
res.end('Hello from CI/CD 2');
});
server.listen(3000);

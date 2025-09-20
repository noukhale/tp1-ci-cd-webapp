const http = require('http');
const server = http.createServer((req,res)=>{
res.end('Hello from CI/CD');
});
server.listen(3000);
Créez un package.json :
{
"name": "tp1-ci-cd",
"version": "1.0.0",
"description": "Demo CI/CD Azure App Service with Jest",
"main": "src/server.js",
"scripts": {
"start": "node src/server.js",
"test": "jest --ci",
"build": "mkdir -p dist && cp -r src/* dist/"
},
"devDependencies": {
"jest": "^29.7.0"
}
}

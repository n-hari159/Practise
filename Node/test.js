var http = require("http");

http.createServer(function (request, response) {
   response.writeHead(200, {'Content-Type': 'text/plain'});
   console.log("abc");
   response.end('Hello World\n');
}).listen(8081);

console.log("Hello");
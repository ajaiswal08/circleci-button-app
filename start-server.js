const httpServer = require("http-server");
const server = httpServer.createServer({ root: "./" });
server.listen(8080);
console.log("Server running at http://localhost:8080");

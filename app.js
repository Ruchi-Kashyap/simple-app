const http = require("http");
const client = require("prom-client");

// collect default metrics
client.collectDefaultMetrics();

const server = http.createServer(async (req, res) => {
  
  // 👉 Metrics endpoint
  if (req.url === "/metrics") {
    res.writeHead(200, { "Content-Type": client.register.contentType });
    res.end(await client.register.metrics());
    return;
  }

  // 👉 Default route
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello !!!!!!!!!! this is a sample app with metrics 🚀");
});

if (require.main === module) {
  server.listen(3000, () => {
    console.log("Server running on port 3000");
  });
}

module.exports = server;
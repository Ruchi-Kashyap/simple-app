const http = require("http");

const app = (req, res) => {
  res.write("Hello !!!!!!!!!! this is a sample app. ");
  res.end();
};

const server = http.createServer(app);

if (require.main === module) {
  server.listen(3000, () => {
    console.log("Server running on port 3000");
  });
}

module.exports = app;

const http = require('http');

const PORT = 1245;
const HOST = 'localhost';

const app = http.createServer((req, res) => {
  const responseText = 'Hello Holberton School!';

  // Set the headers and status code in one go
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send the response and close the connection
  res.end(responseText);
});

// Start the server and listen on the specified port and host
app.listen(PORT, HOST, () => {
  console.log(`Server listening at -> http://${HOST}:${PORT}`);
});

module.exports = app;

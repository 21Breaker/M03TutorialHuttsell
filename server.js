const http = require('https');

const server = http.createServer((req, res) => {
  console.log('Request node');
});

server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000')
});
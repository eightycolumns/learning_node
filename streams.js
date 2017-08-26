const http = require('http');

// The "request" param is an http.IncomingMessage, which is a readable stream.
// The "response" param is an http.ServerResponse, which is a writable stream.

const server = http.createServer((request, response) => {
  let body = '';

  request.setEncoding('utf8');

  request.on('data', (chunk) => {
    body += chunk;
  });

  request.on('end', () => {
    response.writeHead(200, {'Content-Type': 'text/plain'});

    try {
      const data = JSON.parse(body);
      response.write(`Type: ${typeof data}\n`);
    } catch (e) {
      response.statusCode = 400;
      response.write(`Error: ${e.message}\n`);
    }

    response.end(`Status Code: ${response.statusCode}\n`);
  });
});

server.listen(3000);

// Examples:
//
// $ curl localhost:3000 -d "{}"
// Type: object
// Status Code: 200
//
// $ curl localhost:3000 -d "\"foo\""
// Type: string
// Status Code: 200
//
// $ curl localhost:3000 -d ""
// Error: Unexpected end of JSON input
// Status Code: 400

const http = require('http');

const server = http.createServer();

server.on('request', (request, response) => {
  response.setHeader('Content-Type', 'text/html');
  response.statusCode = 200;

  response.write('<h1>Request:</h1>\n');

  const headers = request.headers;
  response.write(`<p>headers: ${headers}</p>\n`);

  const method = request.method;
  response.write(`<p>method: ${method}</p>\n`);

  const url = request.url;
  response.write(`<p>url: ${url}</p>\n`);

  response.end();
});

server.listen(3000);

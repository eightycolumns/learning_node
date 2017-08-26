const http = require('http');

const EventEmitter = require('events');

const server = http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain'});

  const eventEmitter = new EventEmitter();

  eventEmitter.on('error', e => {
    response.write('Error: ' + e.message);
  });

  eventEmitter.emit('error', new Error('Epic Fail'));

  response.end();
});

server.listen(3000);

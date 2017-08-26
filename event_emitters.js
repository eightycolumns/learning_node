const http = require('http');

const EventEmitter = require('events');

const server = http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain'});

  const eventEmitter = new EventEmitter();

  eventEmitter.once('foo', () => {
    response.write('Handling event "foo".\n');
  });

  eventEmitter.emit('foo');
  eventEmitter.emit('foo');

  response.end();
});

server.listen(3000);

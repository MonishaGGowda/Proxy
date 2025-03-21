const http = require('http');
const httpProxy = require('http-proxy');

// Change this to your backend server
const TARGET = 'http://localhost:8080';

// Change this to use a different port
const PORT = 9090;

// Create a proxy server
const proxy = httpProxy.createProxyServer({});

// Create HTTP server that uses the proxy
const server = http.createServer((req, res) => {
  console.log(`Proxying request: ${req.method} ${req.url}`);
  proxy.web(req, res, { target: TARGET }, (error) => {
    res.writeHead(502, { 'Content-Type': 'text/plain' });
    res.end('Bad Gateway');
  });
});

// Start listening
server.listen(PORT, () => {
  console.log(`Reverse proxy running on http://localhost:${PORT}`);
  console.log(`Forwarding all traffic to ${TARGET}`);
});

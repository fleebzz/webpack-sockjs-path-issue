const http = require(`http`);
const httpProxy = require(`http-proxy`);

const proxy = httpProxy.createProxyServer({});

proxy.on(`error`, (err, req, res) => {
  res.writeHead(500, {
    'Content-Type': `text/plain`
  });

  res.end(`Something went wrong.`);
});

http.createServer((req, res) => {

  if (req.url.indexOf(`/sub-folder`) !== 0) {
    res.writeHead(404);
    return res.end(`Not found`);
  }

  proxy.web(req, res, {
    target: `http://127.0.0.1:9091`,
  });

}).listen(9090);
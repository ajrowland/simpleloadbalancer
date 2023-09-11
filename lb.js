const express = require("express");
const request = require("request");

const config = require("./config.json");

const handler = (req, res) => {
  let server = config.default;

  Object.entries(config.urls).forEach(([key, value]) => {
    if (value.includes(req.url)) {
      server = key;
    }
  });

  console.log(`Request for ${server + req.url}`);

  req.pipe(request({ url: server + req.url })).pipe(res);
};

const lbServer = express();

lbServer.use((req, res) => {
  handler(req, res);
});

lbServer.listen(config.port, (err) => {
  err
    ? console.log(`Failed to listen on port ${config.port}`)
    : console.log(`Load balancer server listening on PORT ${config.port}`);
});

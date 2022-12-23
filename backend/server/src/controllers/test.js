const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => {
  const { body, headers, readable, rawTrailers, socket, secure, subdomains, statusMessage, complete, fresh, ip, method, originalUrl, params, protocol, query} = req;

  res.write(JSON.stringify({
    message: 'you sent this information',
    body,
    headers,
    complete,
    fresh,
    ip,
    method,
    originalUrl,
    params,
    protocol,
    query,
    rawTrailers,
    readable,
    secure,
    // socket,
    subdomains,
    statusMessage,
  }, null, 2));
});

router.get('/test2', (req, res) => {
  const {
    body, headers, readable, rawTrailers, socket, secure, subdomains, statusMessage, complete, fresh, ip, method, originalUrl, params, protocol, query,
  } = req;
  res.write(JSON.stringify({message: 'hey, you said hi!',}, null, 2));
});

//export router so the server can find this controller
module.exports = router;
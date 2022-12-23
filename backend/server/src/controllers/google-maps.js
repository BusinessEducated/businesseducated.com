
const express = require('express');
const router = express.Router();
// ========================================================================== //
//      Google maps search
// ========================================================================== //
app.get('/api/maps', (req, res) => {
  const { body: { lat, lng } } = req;
  res.send(axios.get(
    `${process.env.GOOGLEMAPAPIURL}?latlng=${lat},${lng}&key=${process.env.GOOGLEAPIKEY}`,
  ).then((data) => data)).catch((err) => err);
});

//export router so the server can find this controller
module.exports = router;
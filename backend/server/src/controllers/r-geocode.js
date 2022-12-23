
const express = require('express');
const router = express.Router();
// ========================================================================== //
//      Reverse geocode
// ========================================================================== //
app.get('/api/reversegeocode', (req, res) => {
  const { params: { location, language } } = req;
  res.send(axios(process.env.RGEOCODEURL, {
    method: 'get',
    headers: {
      ...commonHeaders,
      'x-rapidapi-host': process.env.RGEOCODEHOST,
      'x-rapidapi-key': process.env.RGEOCODEKEY,
    },
    params: {
      location, /** : `${lat},${lon}`, */
      language,
    },
    body: {
      code: 'US',
    },
  })
    .then((data) => data))
    .catch((err) => err);
});

//export router so the server can find this controller
module.exports = router;
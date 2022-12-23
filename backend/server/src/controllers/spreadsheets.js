
const express = require('express');
const router = express.Router();
// ========================================================================== //
//      Google spreadsheet api
// ========================================================================== //
app.post('/api/spreadsheets', (req, res) => {
  const { body } = req;
  res.send(axios.post({
    url: `${process.env.GOOGLESPREADSHEETSURL}/${process.env.GOOGLESPREADSHEETID}/values/A57:append`,
    headers: {
      accept: '*/*',
      userAgent: '*',
    },
    query: {
      valueInputOption: 'RAW',
      includeGridData: true,
      key: '',
      insertDataOption: 'RAW',
      responseDAteTimeRenderOption: 'SERIAL_NUMBER',
    },
    // range: 'A57:A59',
    // majorDimension: 'COLUMN', // READ MORE AT https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values#dimension
    // values: ['james is a nicesmellingbutthead', 'ASDFASDFASDF', 'asdfasdfasdf'],
    body,
  }).then((data) => data)).catch((err) => err);
});

//export router so the server can find this controller
module.exports = router;
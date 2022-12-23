
const express = require('express');
const router = express.Router();
// ========================================================================== //
//      Recatpcha
// ========================================================================== //
app.use('/api/recaptcha', (req, res) => {
    if (req.body.captcha === undefined || 
        req.body.captcha === '' || 
        req.body.captacha === null)
    return res.json({ success: false, msg: 'Please select captcha' });


 // verify url
 const verifyUrl = `https://google.com/recaptcha/api/siteverify?secret=${process.env.SECRET_KEY}&response=${req.body.captcha}&remoteip=${req.connection.remoteAddress}`;

 //  request to verify url
 const body = await fetch(verifyUrl).then(res => res.json());


 // if captcha not verified 
  if (body.success !== undefined && !body.success)
  return res.json({ success: false, msg: 'captcha failed' });

// if captcha verified
return res.json({ success: true, msg: 'captcha verfied' });
});

//export router so the server can find this controller
module.exports = router;
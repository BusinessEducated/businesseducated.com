const serverless = require('serverless-http');
const { app, router } = require('./src/index');

require('dotenv').config({ path: `${__dirname}/../../.env.${process.env.NODE_ENV}`});

// ========================================================================== //
// add our api into the express app for serverless to use
app.use('/.backend/server', router);// route to the main lambda function netlify uses

// ========================================================================== //
// The listender for the lambda function
module.exports.handler = serverless(app, { debug: process.env.NODE_ENV === 'development' });

// ========================================================================== //
// Main server *redirects to https*
// ========================================================================== //
// app.all('*', (req, res) => res.redirect(`http://${process.env.DOMAIN_NAME}:${process.env.SERVER_PORT}`, 200));
app.listen(process.env.SERVER_PORT, () => console.log(`
    HTTP server listening: http://${process.env.DOMAIN_NAME}:${process.env.SERVER_PORT}!\n
    SWAGGER: http://${process.env.DOMAIN_NAME}:${process.env.SERVER_PORT}/api-docs!\n
`));

// ========================================================================== //
// HTTPS
// ========================================================================== //

// HTTPS server
// const httpsServer = https.createServer({
//   key: fs.readFileSync(path.join(process.cwd(), 'netlify/functions/src/', 'server.key')),
//   cert: fs.readFileSync(path.join(process.cwd(), 'netlify/functions/src/', 'server.cert')),
// }, app);
// app.all('*', (req, res) => res.redirect(`https://${process.env.DOMAIN_NAME}:${process.env.SERVER_PORT}`, 200));
// httpsServer.listen(443, () => console.log('HTTPS server listening: https://localhost:443'));
 
 
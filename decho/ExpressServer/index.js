// const cors = require('cors');
// const express = require('express');

// const PORT = 3002;
// const expressServer = express();

// expressServer.use(cors());

// expressServer.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// expressServer.get('/mars', (req, res) => {
//   res.send('hello mars');
// });

// expressServer.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));

// const connect = require('connect');
// const http = require('http');

// const app = connect();

// // gzip/deflate outgoing responses
// const compression = require('compression');
// app.use(compression());

// // store session state in browser cookie
// const cookieSession = require('cookie-session');
// app.use(
//   cookieSession({
//     keys: ['secret1', 'secret2'],
//   })
// );

// // parse urlencoded request bodies into req.body
// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: false }));

// // respond to all requests
// app.use(function (req, res) {
//   res.end('Hello from Connect!\n');
// });

// //create node.js http server and listen on port
// http.createServer(app).listen(3000);

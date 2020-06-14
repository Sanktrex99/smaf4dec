const cors = require('cors');
const express = require('express');

const PORT = 3002;
const expressServer = express();

expressServer.use(cors());

expressServer.get('/', (req, res) => {
  res.send('Hello World!');
});

expressServer.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));

'use strict';

const express = require('express');

// Env
const HOST = process.env.HOST;
const PORT =  process.env.PORT;

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
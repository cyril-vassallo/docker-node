'use strict';

const express = require('express');

// Env
const HOST = process.env.HOST;
const PORT =  process.env.PORT;

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Home page');
});
app.get('/article', (req, res) => {
  res.send('Article page');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
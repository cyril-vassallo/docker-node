'use strict';

const { ENV } = require('./Config/ENV')
const express = require('express')
const { SelectAuthors } = require('./Controllers/AuthorController')


// EXPRESS ROUTES

/**
 * Display homepage
 */
const app = express();
app.get('/', (req, res) => {
  res.send('Home page');
});

/**
 * Display all authors
 */
app.get('/author', async (req, res) => {
  try {
    console.log(req)
    const body = await SelectAuthors()
    console.log(body)
    res.send(body);
  } catch (e) {
    console.log(e)  
  }
});

app.listen(ENV.NODE_PORT, ENV.NODE_HOST);
console.log(`Running on http://${ENV.NODE_HOST}:${ENV.NODE_PORT}`);


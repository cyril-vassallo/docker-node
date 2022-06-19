const express = require('express');
const app = express();
const authors = require('./api/routes/authors');

// middleware
app.use((req, res, next) => {
    req.author = req.path.split('/')[2];
    next();
});

app.use('/authors', authors)

module.exports = app;
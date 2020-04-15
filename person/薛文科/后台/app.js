const express = require('express');
var app = express();
var word=require('./Route/word')
app.use('/word',word);
app.listen(8080);
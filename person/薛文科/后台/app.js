const express = require('express');
var app = express();
var api = require('./Route/yonghu');
var login = require('./Route/login');
var essay = require('./Route/essay');
var register=require('./Route/register')
var photo = require('./Route/photo')
var tiku = require('./Route/tiku')
var images=require('./Route/Images')
var word=require('./Route/word'),
    video=require('./Route/video')
app.use('/login',login);
app.use('/api',api);
app.use('/essay',essay);
app.use('/register',register)
app.use('/photo',photo)
app.use('/tiku',tiku)
app.use('/images',images);
app.use('/word',word);
app.use('/video',video);
app.listen(8080);
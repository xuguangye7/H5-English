const express = require('express');
var app = express();
var api = require('./Route/yonghu');
var login = require('./Route/login');
var essay = require('./Route/essay');
var register=require('./Route/register')
var photo = require('./Route/photo')
var writ = require('./Route/writ')
var images=require('./Route/Images')
var word=require('./Route/word');
var video=require('./Route/video');
var sound=require('./Route/sound');
var review=require('./Route/review')
app.use('/login',login);
app.use('/api',api);
app.use('/essay',essay);
app.use('/register',register)
app.use('/photo',photo)
app.use('/writ',writ)
app.use('/images',images);
app.use('/word',word);
app.use('/video',video);
app.use('/sound',sound);
app.use('/review',review)
app.listen(8080);
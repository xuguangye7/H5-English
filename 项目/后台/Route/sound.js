const express = require('express');
const pool = require('./pg');
const app = express.Router();
const showdata = require('./showdata');
const fs=require('fs');
let sql='select * from sqlstudent';

app.get('/',(req,res)=>{
    let  sql = 'SELECT * FROM sound';
    showdata(res,sql);
});

app.get('/play',(req,res)=>{
    let name=req.query.name;
    console.log(name);
    var file = '/home/guangye/minpapi/math/sound/';
    console.log(file+name);
    res.sendFile(file+name);
})

module.exports=app;
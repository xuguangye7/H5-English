const express = require('express');
const pool = require('./pg');
const app = express.Router();
const showdata = require('./showdata')

app.get('/list',(req,res)=>{
    var sql='SELECT * FROM cet4';
    showdata(res,sql)

})
app.get('/middle',(req,res)=>{
    var sql='SELECT * FROM middle';
    showdata(res,sql)

})
app.get('/easy',(req,res)=>{
    var sql='SELECT * FROM easy';
    showdata(res,sql)

})

app.get('/show',(req,res)=>{
    let name=req.query.name;
    console.log(name);
    var file = '/home/wenke/minpapi/math/video/';
    console.log(file+name);
    res.sendFile(file+name);
})

module.exports=app;
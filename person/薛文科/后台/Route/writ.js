const express = require('express');
const pool = require('./pg');
const app = express.Router();
const showdata = require('./showdata')
app.get('/',(req,res)=>{
    let  sql = 'SELECT * FROM writer';
    showdata(res,sql);
});

app.get('/test',(req,res)=>{
    let  sql = 'SELECT * FROM englishtest';
    showdata(res,sql);
});

app.get('/detail',(req,res)=>{
    let id=req.query.id
    let  sql = `SELECT * FROM englishtest WHERE id='${id}'`;
    showdata(res,sql);
});

module.exports=app;
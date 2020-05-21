const express = require('express');
const pool = require('./pg');
const app = express.Router();
const showdata = require('./showdata');
const fs=require('fs');
let sql='select * from sqlstudent';

app.get('/',(req,res)=>{
    let  sql = 'SELECT * FROM reviewtest';
    showdata(res,sql);
});

app.get('/look',(req,res)=>{
    let id=req.query.id
    let  sql = `SELECT * FROM reviewtest WHERE id='${id}'`;
    showdata(res,sql);
});

module.exports=app;
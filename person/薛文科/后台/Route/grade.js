const express = require('express');
const pool = require('./pg');
const app = express.Router();
const showdata = require('./showdata')

var uid;
let inssql1 = 'INSERT into grade(id,name,grade) VALUES($1,$2,$3)';
app.post('/check',(req,res)=>{
    var data = '';
    req.on('data',(chunk)=>{
      data += chunk;
    });
    req.on('end',()=>{
        var jsonstr=JSON.parse(data);
        var arr = [];
        for(let i in jsonstr){
            arr.push(jsonstr[i]);
        }
        console.log("Landing successfully");
        db = { state: 200, message: 'successfully', content: 'successfully' };
        console.log(jsonstr)
        pool.query(inssql1,arr);
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.json(db);
    });
});

app.get('/check',(req,res)=>{
    let  sql = 'SELECT * FROM grade';
    showdata(res,sql);
});
module.exports=app;

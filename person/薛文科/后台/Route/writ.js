const express = require('express');
const pool = require('./pg');
const app = express.Router();
const showdata = require('./showdata')
app.get('/',(req,res)=>{
    let  sql = 'SELECT * FROM writer';
    showdata(res,sql);
});

app.get('/test',(req,res)=>{
    let  sql = 'SELECT * FROM zuowen';
    showdata(res,sql);
});

app.get('/detail',(req,res)=>{
    let id=req.query.id
    let  sql = `SELECT * FROM zuowen WHERE id='${id}'`;
    showdata(res,sql);
});

var isregister='';
let inssql = 'INSERT into myanswe(id,answe) VALUES($1,$2)';
app.post('/add',(req,res)=>{
    var data = '';
    req.on('data',(chunk)=>{
      data += chunk;
    });
    req.on('end',()=>{
        var jsonstr=JSON.parse(data);
        console.log('jjj',jsonstr)
        var arr = [];
        for(let i in jsonstr){
            arr.push(jsonstr[i]);
            console.log('js',jsonstr[i])
        }
        console.log('arr',arr)
        isregister=arr[1];
        console.log('isre',isregister)
        console.log("Landing successfully");
        db = { state: 200, message: '提交成功', content: isregister };
        console.log(jsonstr)
        pool.query(inssql,arr);
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.json(db);
    });
});


app.get('/answe',(req,res)=>{
    let  sql = `SELECT * FROM myanswe WHERE answe='${isregister}'`;
    showdata(res,sql);
});
module.exports=app;
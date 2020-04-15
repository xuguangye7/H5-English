const express = require('express');
const pool = require('./pg');
const app = express.Router();
const showdata = require('./showdata')
app.get('/',(req,res)=>{
    let  sql = 'SELECT * FROM word';
    showdata(res,sql);
});


// 查询
let  sql = 'SELECT * FROM word';
let isregister;
var uid;
app.post('/',(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    var data = '';
    req.on('data',(chunk)=>{
      data += chunk;
      console.log('data1',data)
    });
    req.on('end',()=>{
        console.log('data',data);
        var jsonstr =JSON.parse(data);
        var arr = [];
        for(let i in jsonstr){
            arr.push(jsonstr[i])
        }
        uid=arr[0];
        console.log('uid',uid)
        pool.query(sql, (error,results,fields)=> {
            console.log(results);
            isregister = false;
            if (error) console.log(error.message);
            for(let i=0;i<results.rows.length;i++){
                if(results.rows[i].word == arr[0]){
                    isregister = true;
                    break;
                }
            }
            if(isregister){
                let str;
                console.log("Landing successfully");
                pool.query(`select * from word where word='${uid}'`, (error,results,fields)=> {
                    if (error) console.log(error.message);
                    str = results.rows;
                    console.log(str)
                    var data = JSON.stringify(str);
                    db =  {state: 200, message: isregister, content: data};  
                    res.send(db);
                });
            }else{
                console.log("Landing failed");
                db = { state: 200, message: isregister, content: isregister }; 
                res.send(db);
            };
        });
    });
});

app.get('/search', function (req, res) {
    let sql = `SELECT * FROM word WHERE word='${uid}'`;
    showdata(res,sql);
    
})

module.exports=app;

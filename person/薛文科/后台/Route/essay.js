const express = require('express');
const pool = require('./pg');
const app = express.Router();
const showdata = require('./showdata')
// let selsql = 'select * from manager';
// let inssql = 'INSERT into manager(id,username,name,password,sex,work,phone,email) VALUES($1,$2,$3,$4,$5,$6,$7,$8)';
//管理员信息页面接口
var glength;
app.get('/',(req,res)=>{
    let  sql = 'SELECT * FROM essay';
    showdata(res,sql);
});
app.get('/delete',(req,res)=>{
    var data = [];
    for(let i in req.query){
        data.push(req.query[i]);
    }
    pool.query('DELETE FROM essay WHERE scontent=$1',data)
    .catch(err=>{
        console.error(err)
    });
})

//管理员添加
// var isregister = false;
var db={};

let selsql = 'SELECT * FROM essay';
let inssql = 'INSERT into essay(sno,smane,scontent,stime,touxiang,sphone) VALUES($1,$2,$3,$4,$5,$6)';
let hphone;
app.post('/add',(req,res)=>{
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
        hphone=arr[0]
        // console.log(user);
        pool.query(selsql, (error,results,fields)=> {
        //error,results,fields:错误对象，json数组，数据信息数组
            console.log(results);
            glength=results.rows.length;
            console.log('glength',glength);
            // console.log(results[1].userid);
            // isregister = true;
            // if (error) console.log(error.message);
            // for(let i=0;i<results.rows.length;i++){
            //     console.log(results.rows[i].sphone);
            //     console.log(results.rows[i].sclass);
            //     if(results.rows[i].sphone === hphone){
            //         isregister = false;
            //         break;
            //     }
            // }
            // if(!isregister){
            //     console.log("Landing failed");
            //     db = { state: 200, message: '注册失败', content: isregister };
            // }else{
            //     console.log("Landing successfully");
            //     db = { state: 200, message: '注册成功', content: isregister };
            //     console.log(jsonstr)
            //     pool.query(inssql,arr);
            // };
            console.log("Landing successfully");
            db = { state: 200, message: '发表成功', content: isregister };
            console.log(jsonstr)
            pool.query(inssql,arr);
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.json(db);
        });
    });
});

// 根据用户查询对应的内容
let  sql = 'SELECT * FROM essay';
let isregister;
var uid,uid1=1;
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
                if(results.rows[i].smane == arr[0]){
                    isregister = true;
                    console.log('rows uid',uid)
                    break;
                }
            }
            if(isregister){
                let str;
                console.log("Landing successfully");
                pool.query(`select * from essay where smane='${uid}'`, (error,results,fields)=> {
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
app.get('/show',(req,res)=>{
    let sql = `SELECT * FROM essay WHERE smane='${uid}'`;
    showdata(res,sql);
});

module.exports=app;

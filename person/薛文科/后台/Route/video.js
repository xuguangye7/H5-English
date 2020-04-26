const express = require('express');
const app = express.Router();

app.get('/show',(req,res)=>{
    let name=req.query.name;
    console.log(name);
    var file = '/home/wenke/minpapi/math/video/';
    console.log(file+name);
    res.sendFile(file+name);
})

module.exports=app;
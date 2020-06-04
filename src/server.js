var express = require("express");
var bodyParser = require("body-parser"); 

var app = express(); 
app.use(bodyParser.json())

var hostName = '127.0.0.1';
var port = 8991;
var token = '';
var adminuser = 'admin';
var adminpw = '123999';

const mysqlapi = require('./mysql.js');

app.all('*', function(req, res, next) {  
    res.header("Access-Control-Allow-Origin", "*");  
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");  
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");  
    res.header("X-Powered-By",' 3.2.1')  
    res.header("Content-Type", "application/json;charset=utf-8");  
    next();  
});

app.get("/get",function(req,res){
    console.log("请求url：",req.path)
    console.log("请求参数：",req.query)
    res.send("这是get请求");
})

app.post("/post",async function(req,res){
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    console.log("请求参数：", req.body);
    var result = {
        code: 500
    }
    if(req.body.token == token){
        try{
            const rows = await mysqlapi.query(req.body.sql);
            result = {code: 200, data: rows};
        }catch{
            result = {code: 500}
            res.send(result);
        }
    }
    res.send(result);
});

app.post("/login",function(req,res){
    console.log("login请求参数：",req.body);
    var result = {code: 500};
    var str = ''
    if(req.body.user == adminuser && req.body.password == adminpw){
        str = '';
        const arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];// , 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

        for (let i = 1; i <= 32; i += 1) {
            const random = Math.floor(Math.random() * arr.length);
            str += arr[random];
        }
        result = {
            code: 200,
            token: str
        };
        token = str;
    };
    res.send(result);
});

app.listen(port,hostName,function(){

   console.log(`服务器运行在http://${hostName}:${port}`);

});
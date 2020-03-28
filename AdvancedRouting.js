var express = require('express');
var app = express();
var router = express.Router();

app.use('/firstRoute',router);

router.get('/',(req,res)=>{
    res.sendFile('Homepage.html',{root:__dirname});
    //res.end("this is first route");
});

router.get('/route1',(req,res)=>{
    res.sendFile('file1.html',{root:(__dirname,'views')});
    //res.end("this is route 1");
});

router.get('/route2',(req,res)=>{
    res.end("this is route 2");
});

app.listen('3000',function(){
    console.log("server is up");
});
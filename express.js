var express = require('express');

var app = new express();
var dirname = "NodeTest";

app.use('/mycssfiles',express.static(__dirname+'/css'));

app.get("/",function(req,res){
    res.sendFile('Homepage.html',{root:__dirname});
});
 
app.listen(8080,function(){
    console.log("server is up");
});
const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();

app.use('/mycssfiles',express.static(__dirname+'/css'));

app.get("/",(req,res) => {
    res.sendFile('Homepage.html',{root : __dirname});
    res.end("my name is "+JSON.stringify(req.query.name));
});

/*app.get(/^(.+)/,(req,res) => {
    try {
        if(fs.statSync(path.join(__dirname,'views',req.params[0]+'.html'))){
            res.sendFile(req.params[0]+'.html',{root:path.join(__dirname,'views')});
        }
    } catch (error) {
        res.sendFile('404.html',{root:path.join(__dirname,'views')});
    }
});*/

app.listen(3000,function(){
    console.log("server is up");
});
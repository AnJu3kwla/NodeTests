const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser());

app.use('/mycssfiles',express.static(__dirname+'/css'));

app.get('/',(req,res) => {
    res.sendFile('form.html',{root:__dirname});
});

app.post("/user",(req,res) => {
    res.end("my name is "+JSON.stringify(req.body.firstName)+""+JSON.stringify(req.body.lastName));
});

app.listen(3000,function(){
    console.log("Server is up");
})
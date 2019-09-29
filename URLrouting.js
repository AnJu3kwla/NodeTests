const express = require('express');
const path = require('path');

const app = express();

app.get(/^(.+)/,(req,res) => {
    res.sendFile(req.params[0]+'.html',{root : path.join(__dirname+'/views')});
});

app.listen(3000,function(){
    console.log("server is up");
});


var express = require('express');
var app = express();
var mysql = require('mysql');

app.get('/',(req,res)=>{
    //when we send a request to the root,ceate a connection to the database
    var con = mysql.createConnection({
        host : 'localhost',
        database : 'nodedb',
        user : 'root',
        password : ''
    });

    con.query("SELECT * FROM students",(err,result)=>{
        if(err) throw err;
        console.log(result);
    });
});

app.listen(8080,function(){
    console.log('Server is Up');
});
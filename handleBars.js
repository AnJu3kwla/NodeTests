var express = require('express');
var app = express();
var mysql = require('mysql');
var handleBars = require('express-handlebars');
var con;

//creating handlebar engine
app.engine('handlebars',handleBars({defaultLayout:'main'}));

//setting view engine. In here we use the created handlebar engine as the view engine
app.set('view engine','handlebars');

app.get('/',(req,res)=>{
    con.query("SELECT * FROM students",(err,result)=>{
        if(err) throw err;
        console.log(result); 
        //rendering the data. In here we send the data as an object
        res.render('students',{
            result : result
        });
    });
});

app.listen(8080,function(){
    //when we send a request to the root,ceate a connection to the database
        con = mysql.createConnection({
        host : 'localhost',
        database : 'nodedb',
        user : 'root',
        password : ''
    });
    console.log('Server is Up');
});
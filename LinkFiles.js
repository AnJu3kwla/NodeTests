/* 
    Following is for an experiment purpose only.
    can be done by using express

*/

const http = require('http');

const server = http.createServer((req,res) => {
    if(req === '/'){
        res.sendFile('Homepage.html',{root : __dirname});
        res.end();
    }
    if(req === '/api/courses'){
        res.write(JSON.stringify([1 ,2, 3]));
        res.end();
    }
});

server.listen(3000);
console.log('server is ready');
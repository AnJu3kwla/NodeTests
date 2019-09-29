/* const http = require('http');

const server = http.createServer(); //this server is an event emitter

server.on('connection',(socket) => {
    console.log('New connection...');
});

server.listen(3000);

console.log('Listening on port 3000'); */

//------------------------------------------------------------------------------------------------------------------

/* Above method is very low level mechanism and it is not used in real world applications.
   we don't respond to the connection event for build a http service. */

/* commonly do is, passing a callback fuction for the createServer() method */

//------------------------------------------------------------------------------------------------------------------

const http = require('http');

const server = http.createServer((req ,res) => {
    /* in here we are working with the actual request or response objects instead of working with the socket  */
    if(req.url === '/'){
        res.write('Hello World 3000');
        res.end();
    }
    if(req.url === '/api/courses'){
        res.write(JSON.stringify([1 , 2 , 3 , 4 , 5]));
        res.end();
    }
}); 

server.listen(3000);

console.log('Listening on port 3000');
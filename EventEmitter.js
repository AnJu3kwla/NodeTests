const EventEmitter = require('event');
const emitter = new EventEmitter();

//Listening to the event
emitter.on('messageLogged',function(arg){
    console.log('Listener called',arg);
});

//raise an event
emitter.emit('messageLogged',{id:1,url:'http://'});
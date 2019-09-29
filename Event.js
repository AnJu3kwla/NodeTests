const EventEmitter=require('events');
const emitter=new EventEmitter();

//Registering a listener to the raised event
emitter.addListener('MessageLogged',function(){
    console.log('Listener Called');
});

//Raising an event
emitter.emit('MessageLogged');

/*If we put code part responsible for raising the event above the regitering the listener part,
  there will be no output becuase when we cal the emit method, this emitter will iterates over the all the 
  registered listeners and calls them synchronously */
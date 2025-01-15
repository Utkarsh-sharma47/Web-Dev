const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
    console.log('an event occurred!');
    setTimeout(()=>{
        console.log ('after 4 seconds');
    },4000)
});
console.log("line before");
myEmitter.emit('event');
console.log("line after");
/*
Creating an Event
let fs=require('fs');

let rs=fs.createReadStream('demo.txt');

rs.on('open',()=>{
    //OPEN A FILE
    console.log("File is opened");
})

rs.on('close',()=>{
    console.log('file is closed');
})
rs.close();
*/

/*
 Using the Event Emitter Object

let event=require('events');


let add=function (a,b){
    console.log('Function executed');
}

let eventEmitter=new event.EventEmitter();

eventEmitter.on('addition',add);
eventEmitter.emit('addition');

*/

//creating listener
let event=require('events');//Creating your own event

let listener1=()=>console.log('Listener 1 executed')

let listener2=()=>console.log('Listener2 executed')

let eventEmitter=new event.EventEmitter();//creating event emitter object
//listener is event
eventEmitter.on('connection',listener1);//Attaching event
//eventEmitter.on('connection',listener2);
eventEmitter.addListener('connection',listener2);//Another way to attaching event
eventEmitter.emit('connection');//create listener
eventEmitter.removeListener('connection',listener1);//remove listener
console.log('Listener 1 removed');
eventEmitter.emit('connection')


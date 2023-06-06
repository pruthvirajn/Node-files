// const EventEmitter=require('events');
// const customEmitter = new EventEmitter();

// customEmitter.on('response',(name,id)=>{
//     console.log('second event '+name+" "+id);
// })

// customEmitter.on('response',()=>{
//     console.log('first event')
// })


// customEmitter.emit('response','raju',13);
// =====================================================================
const http=require('http');

const server=http.createServer();

server.on('request',(req,res)=>{
    
    res.end("welcome asdf");
})

server.listen(6000);
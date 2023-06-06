// Blocking patterns nodu hinge aagadhu
const http=require('http');

const server=http.createServer((req,res)=>{

    // if(req.url==="/"){
    //     res.end("Home page");
    // }
    // if(req.url==="/about"){
    //     for(let i=0;i<100;i++){
    //         for(let j=0;j<100;j++){
    //             console.log(i+j);
    //         }
    //     }
    //     res.end("About page abcd");
    // }

    const fileStream=fs.createReadStream('./content/big.txt','utf8')
    fileStream.on('open',()=>{
        fileStream.pipe(res)
    })

    fileStream.on('error',(err)=>{
        res.end(err)
    })
    
})
server.listen(5000,()=>console.log("listener"));
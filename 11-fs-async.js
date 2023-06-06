//using callbacks

const {readFile,writeFile}= require('fs');

readFile('./content/first.txt','utf-8',(err,rslt)=>{
    console.log("first read() started");
    if(err){
        console.log(err);
        return null;
    }
    const first=rslt;
    readFile('./content/first.txt','utf-8',(err,result)=>{
        console.log("second read() started");
        if(err){
            console.log(err);
            return null;
        }
        const second=result;

        writeFile('./content/result-async.txt',`nodo eno barithidhini first =${first}, second= ${second}`,(err,resu)=>{
        if(err){
            console.log(err);
            return null;
        }
        console.log('enu illa writing');
        })      
    console.log("second read function ending")  
    })
    console.log("I am done with the task");
})
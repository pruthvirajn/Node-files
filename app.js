
// GLOBALS -NO WINDOW!!!
// __dirname   - path to current directory
// __filename  - file name
// require     - function to use modules (commonJS)
// module      - info about current module (file)
// process     - info about env where the program is being executed



// Modules : Encapsulated code  (only share minimum)
// CommonJS, every file is module(by default)

/*
const names= require('./names');
console.log(names.n2);
require("./mindG");
const greet= require('./utils');
console.log(greet);
greet(names.n2);
greet(names.n3);
*/
/*
const os=require('os');
// info about current user
const user=os.userInfo();
console.log(user);
*/

// method returns the system uptime in seconds
/*
console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOS={
    naam:os.type(),
    release:os.release(),
    totalMenu:os.totalmem(),
    freMem:os.freemem()
}

console.log(currentOS);
*/

// const path =require('path');
// console.log(path.sep);

// const filePath=path.join('/content','subfolder','test.txt');
// console.log(filePath);

// // base name
// const base= path.basename(filePath);
// console.log(base);

// // accepts the paths
// const absolute = path.resolve(__dirname,'content','subfolder','test.txt');
// console.log(absolute);


const {writeFileSync}=require('fs');

const start=()=>{
    for(let i=1;i<=10000;i++){
        writeFileSync('./content/big.txt',`hello world ${i}\n`,{flag:'a'});
    }
  
}

start();
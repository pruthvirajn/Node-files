// Promises nodu
const {readFile,writeFile}=require('fs').promises;

const start=async()=>{
    try{
    const first=await writeFile('./content/first.txt','Hosdhag barithidhini append maadthilla first file ge');
    const second=await writeFile('./content/second.txt',", append maadi barithidhini second file ge",{flag:'a'});
    const third=await readFile('./content/third.txt','utf-8');
    console.log(third);
    }
    catch(error){
        console.log(error);
    }
}
start();



// -----------------------------------------------------------

// const util=require('util');

// const readFilePromise=util.promisify(readFile);
// const writeFilePromise=util.promisify(writeFile);

// const start=async()=>{
//     try{ 
//         const first = await readFilePromise('./content/first.txt','utf-8');
//     const second= await readFilePromise('./content/second.txt','utf-8');
//     console.log(first);
//     console.log(second);
//     const third= await writeFilePromise('./content/third.txt',"Hello this is third file",{flag:'a'})
// }catch(err){
//     console.log(err);
// }
   
// }

// start();
// -------------------------------------------------------------------------

// const getText=(path)=>{
//     return new Promise((resolve,reject)=>{
//         readFile(path,'utf-8',(err,data)=>{
//             if(err){
//                 reject(err);
//             }
//             else{
//                 resolve(data);
//             }
//         })
//     })
// }

// getText('./content/first.txt').then(
//     (result)=>console.log(result)
// ).catch(
//     (err)=>console.log(err)
// )
// ----------------------------------------------------------------------
// const start=async()=>{
//     try{
//         const first = await getText('./content/first.txt');
//         const second= await getText('./content/second.txt');
//     console.log(first);
//     console.log(second);
// }catch(error){
//     console.log(error);
// }
    
// }

// start();


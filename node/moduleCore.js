// const fs = require('fs')

// console.log("Debut")

// console.log(fs.readFileSync('./A.txt','utf-8'))



// fs.readFile('./A.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })

// console.log("med")

// console.log("Fin")


const http = require('http')

http.createServer((req,res)=>{
    res.write('<h1>Success</h1>')
    res.end()
}).listen(5000,console.log('Server is running'))
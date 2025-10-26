const fs = require('fs')
const sum = require('./math')
const http = require('http')
const { join } = require('path')

console.log("Hello")


// module type

// 1 in Built
fs.writeFileSync("notes.txt" , "This is a text")

// 2 local Modules
console.log(sum(5,5))

// 3 external Modules


// Create a server
const server = http.createServer((req , res)=>{
    if(req.url == "/about"){
        res.end(JSON.stringify({data: "This is a About"}))
    } else if(req.url == "/contact"){
        res.end(JSON.stringify({ data: "This is a Contact"}))
    } else{
        res.end(JSON.stringify({ msg:"This is a Server"}))
    }
})

server.listen(3000 , ()=>{
    console.log("Server Started")
})
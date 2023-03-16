const fs = require("fs")

fs.readFile("nodejs.txt","utf-8",(err,data)=>{
     console.log(data)})
fs.writeFile("two.txt","data",(err)=>{
if(err) throw err
console.log("writing succefully")
})
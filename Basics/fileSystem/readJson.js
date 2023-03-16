const fs= require('fs')

//reading the synchronous

/*let data= fs.readFileSync('emp.txt', 'utf-8')
console.log(data)*/
//reading a asynchronous
/*fs.readFile("one.js","utf-8",(err,newData)=>{
    console.log(newData);
})*/
//reading& writing the asynchronous
fs.readFile("one.txt","utf-8",(err,data)=>{
fs.writeFile("galaxy.txt", data,(err)=>{  
    if(err) throw err;
    console.log("writing file suucesfully")
})
});

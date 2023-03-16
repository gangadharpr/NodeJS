const jwt= require('jsonwebtoken')
let user={
    email:'gangadhar@gmail.com',
    password:'abc@123'
}

let payload={
    id:user.email,
}
    //generating  tocken
let token=jwt.sign(payload,"bfrhghghd",(err,token)=>{
if(err) throw err
   console.log(token)
})

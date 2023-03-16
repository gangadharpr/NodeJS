const bcrypt=require('bcrypt')
let userDetails={
    name:"gangadhar",
    email:"gangadhar@gmail.com",
    password:"ganga@123"
}
    //generating hash format your string
let newpassword=bcrypt.hashSync(userDetails.password,10)
console.log(newpassword)

userDetails={...userDetails,password:newpassword}
console.log(userDetails)
        //comparing your property value or your password
let x=bcrypt.compareSync("hebjbja@123" ,userDetails.password) //gives boolean value true or false directly
console.log(x)

if(bcrypt.compareSync("hebjbja@123" ,userDetails.password)){
    console.log("password-matched")}
    else{
        console.log("password not matched")
    }
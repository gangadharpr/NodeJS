const bcrypt=require('bcrypt')

let userPayments={
    name: "veena",
    userId:"HUN123",
    ccNo:"65656",
    cvv:"9000"
}
//generating hash format your string
let new_ccNo=bcrypt.hashSync(userPayments.ccNo,10)
let new_cvv=bcrypt.hashSync(userPayments.cvv,10)

let new_UserPayment={...userPayments,  ccNo:new_ccNo, cvv:new_cvv}
console.log(new_UserPayment)

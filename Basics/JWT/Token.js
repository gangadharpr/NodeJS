const jwt= require('jsonwebtoken')
let user={
    email:'gangadhar@gmail.com',
    password:'abc@123'
}

let payload={
    id:user.email,
}
    //generating  tocken
    let secretKey = "HJHJGJG";
    let token=jwt.sign(payload,secretKey,{expiresIn: 60*60})
    console.log(token);
    
    //how to verify the token
    jwt.verify(token, secretKey, (err, newPayload) => {
        if (err) throw err;
        console.log(newPayload);
    });
    

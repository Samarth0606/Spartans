let express = require('express');
let app = express();


app.use( (req,res,next)=>{
    // res.send('namaste ji ab kaunsa route dhoondh rhe ho');
    console.log("jo krne aae they kro aur fir code ko aage jane do");
    next();
})

const verify = (req,res,next)=>{
    let {password} = req.query;
    if(password !== "orange"){
        return res.send('invalid password');
    }
    else{
        return next();
    }

}


app.get('/' , (req,res)=>{
    res.send('home route');
})
app.get('/secret' , verify , (req,res)=>{
    res.send('mai kabhi batla tha nhi par teri parwah krta hu mai maa');
})


app.listen(2323 , ()=>{
    console.log("server connected at port 2323")
})
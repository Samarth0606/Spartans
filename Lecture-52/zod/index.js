const express = require('express')
const app = express()
const zod = require('zod')

// json body parser
app.use(express.json());

let schema = zod.array(zod.number());
let schema2 = zod.object({
    email : zod.string().email() ,
    password : zod.string().min(8),
    country : zod.literal("IN").or(zod.literal("US"))
})

// api to test on postman
app.post('/spartans' , (req,res)=>{
    let heart = req.body.hearts;
    // if(typeof heart === 'object'){

    // }
    // const resp = schema.safeParse(heart);
    const resp = schema2.safeParse(heart);
    if(!resp.success){
        return res.status(411).json({
            msg: "Invalid input type array"
        })
    }else{
        res.status(200).json(resp.data);
    }
})



const PORT = 3000;
app.listen(PORT , ()=>{
    console.log(`server connected at port: ${PORT}`)
})
const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const PORT=process.env.NODE_ENV || 3000;

app.get("/",(req,resp)=>{
    resp.status(200).json({
        message: "Hello World"
    });
});


app.post("/",(req,resp)=>{
    return resp.status(200).json({
        message: req.body
    })
})

app.listen(PORT,()=>{
    console.log("Server is listening on port ",PORT);
})
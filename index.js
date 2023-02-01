const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const PORT=process.env.NODE_ENV || 3000;

const posts = [
    {
        id:1,
        title:"First Post"
    }
]


app.get("/",(req,resp)=>{
    resp.status(200).json({
        message: "Hello World"
    });
});


app.post("/",(req,resp)=>{
    return resp.status(200).json({
        message: req.body
    })
});

app.get("/posts",(req,resp)=>{
    resp.status(200).json({
        post: posts
    });
})



app.listen(PORT,()=>{
    console.log("Server is listening on port ",PORT);
})
const express = require("express");
const app = express();

app.get("/",(req,resp)=>{
    resp.send("Hello World");
});

app.post("/",(req,resp)=>{
    resp.send("Hello from post");
});

app.listen(3000,()=>{
    console.log("Server started on port 3000");
});
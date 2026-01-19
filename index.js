const express= require("express");

const app=express();

// server.js
app.get("/",(req,res)=>{
    res.send("Hello World!");
});

// jalwa ankit ankit
app.listen(3000,()=>{
    console.log("server is running on 3000!")
})
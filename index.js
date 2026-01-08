const express = require("express");

const app=express();


app.get("/",(req,res)=>{
    return res.status(200).send("server is ok!!!");
})

app.listen(3000,()=>{
    console.log("server is listeing on 3000")
})
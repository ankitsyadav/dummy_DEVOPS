const express=require("express");

const app=;


app.get("/",(req,res)=>{
    return res.status(200).send("success ok !!!");
})

app.listen(3000,()=>{
    console.log("server listening on port 3000");
})
const express= require("express");

const app=express();

// server.js
app.get("/health", (req, res) => {
  res.send("OK");
});

app.listen(3000,()=>{
    console.log("server is running on 3000!")
})
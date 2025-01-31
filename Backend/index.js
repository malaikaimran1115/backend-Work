const express = require('express');
const { hardKiller } = require('init');
const app = express();
const port = 8888;


app.get("/about" , (req,res)=>{
    res.send("This is about the page");
    console.log("This is about the page");
})

app.get("/contact" , (req,res)=>{
    res.send("This is contact page");
    console.log("This is contact page");
})

app.get("/" , (req,res)=>{
    res.send("This is contact page");
    console.log("This is contact page");
})






app.listen(port,  () =>{
    console.log(`Server is running on port ${port}`);
})
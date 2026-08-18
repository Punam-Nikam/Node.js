const express = require("express");

const app= express();

//middleware

app.use(function(req,res,next){
    console.log("Middleware executed");
    next();
});

//route

app.get("/", function(req,res){
    res.send("Welcome to Express");
});

app.listen(3000,function() {
    console.log("Server running at http://localhost:3000");
});
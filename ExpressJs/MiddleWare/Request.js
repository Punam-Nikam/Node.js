//Middlewae can modify the request

const express = require("express");
const app = express();

app.use(function(req,res,next){

    req.studentName = "Virat";
    next();
});

app.get("/student", function(req,res){
    res.send("Student Name : "+ req.studentName);
})

app.listen(3000,function() {
    console.log("Server running at http://localhost:3000");
});
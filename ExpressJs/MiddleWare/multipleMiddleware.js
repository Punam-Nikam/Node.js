const express = require('express');

const app=express();

// app.use(function(req,res,next){
//     console.log("middleware 1");
//     // res.send("middleware 1");

//     next();

// });

// app.use(function(req,res,next){
//     console.log("middleware 2");
//     next();
// });

// app.get("/",function(req,res) {
//     console.log("Route");
//     res.send("Hello");

// });

//Built in express middle ware
app.use(express.json());

app.post("/student",function(req,res){
    console.log(req.body);
    res.json(req.body);
});



app.listen(3000, function(){
    console.log("running on http://localhost:3000")
})
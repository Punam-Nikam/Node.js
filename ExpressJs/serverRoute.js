var express = require('express');

var app = express();

app.use(express.static("public"));

//calling routes
 app.get("/", function(req, res) {
    res.send("Welcome to express server");
 });

 app.get("/index", function(req, res) {
    res.sendFile(__dirname + "/public/home.html");
 });

 app.get("/punam", function(req, res){
    res.send("Welcome to punam's folder");
 });

 app.get("/abc", function(req, res){
    res.sendFile(__dirname + "/public/about.html");
 });

 //express server does not mean only web pages
 // it resturns JSON data as well

 app.get("/student", function(req, res){
    res.json({
        id : 101,
        name : "Virat",
        course : "MCA"});
    
 });
 
 app.listen(3000, function() {
    console.log("Server running at http://localhost:3000");
});
const express = require("express");
const app = express();

app.get("/",function(req,res) {
    console.log("Route");
    res.send("Hello");
})
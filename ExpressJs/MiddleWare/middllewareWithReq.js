const express = require("express");

const app= express();

app.use(function(req,res,next) {
    console.log("Method : ",req.method);

    console.log("URL : ",req.url);

    next();

    //middleware can handle request
    // modify the routes
    // send response
});

app.listen(3000,function() {
    console.log("Server running at http://localhost:3000");
});
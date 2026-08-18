var express = require('express');

var app = express();

//serve all static files FROM public folder

app.use(express.static("public"));

app.listen(3000, function() {
    console.log("Server running at http://localhost:3000");
});
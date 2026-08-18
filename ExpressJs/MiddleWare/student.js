const express = require('express');
const fs = require('fs');

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Serve HTML page
app.use(express.static('public'));

app.use(express.json());
app.post('/student', function (req, res) {
    
    console.log(req.body);
    res.send(req.body);
    
});


app.listen(3000, function(){
    console.log("running on http://localhost:3000")
})
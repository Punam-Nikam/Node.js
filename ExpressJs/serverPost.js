const express = require('express');
const cookieParser = require("cookie-parser");

const app = express();

//middleware
app.use(express.json());
app.use(cookieParser());

//GET request

app.get("/student/:id", function(req,res) {
    console.log("HTTP method : ", req.method);

    console.log("Requested URL : ", req.url);

    console.log("Route parameters : ", req.params);

    console.log("Query parameters : ", req.query);

    console.log("Headers : ", req.headers);

    console.log("Cookies : ", req.cookies);

    res.json({
        message : "Request infromation recieved " ,
        method : req.method,
        url : req.url,
        studentId : req.params.id,
        query : req.query,
        userAgent : req.headers["user-agent"],
        cookies : req.cookies
    });
});

//POST request
app.post("/student", function(req,res) {

    console.log("Request Body : ", req.body);

    res.json({
        message : "Student data recieved",
        student : req.body
    });
})

//start server 
app.listen(3000, function() {
    console.log("Server running at http://localhost:3000");
});

// http://localhost:3000/student/101?name=Virat&course=MCA  //for GET request
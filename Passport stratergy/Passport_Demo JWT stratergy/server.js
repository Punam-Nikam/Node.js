const express = require("express");

const passport = require("./config/passport");

const authRoutes = require("./routes/auth");


const app = express();


// Read JSON data

app.use(express.json());


// Initialize Passport

app.use(passport.initialize());


// Routes

app.use("/auth", authRoutes);


// Home route

app.get("/", function(req, res) {

    res.send("Passport JWT Application");

});


// Start server

app.listen(3000, function() {

    console.log(
        "Server running at http://localhost:3000"
    );

});
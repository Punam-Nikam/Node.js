const express = require("express");
const session = require("express-session");

const passport = require("./config/passport");
const authRoutes = require("./routes/auth");

const app = express(); //assigninng express library to app variable

app.use(express.urlencoded({ 
    extended: false
}));

app.use(express.json());

app.use(
    session({
        secret: "mysessionsecret",
        resave: false,
        saveUninitialized: false
    })
);

app.use(passport.initialize());

app.use(passport.session());

app.use(express.static("public"));

app.use("/auth", authRoutes);

app.get("/", function(req, res) {

    res.redirect("/login.html");

});

app.listen(3000, function() {

    console.log(
        "Server running at http://localhost:3000"
    );

});
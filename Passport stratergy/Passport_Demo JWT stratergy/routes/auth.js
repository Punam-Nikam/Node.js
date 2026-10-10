const express = require("express");

const jwt = require("jsonwebtoken");

const passport = require("../config/passport");


const router = express.Router();

const SECRET_KEY = "mysecretkey";


// Dummy user

const user = {
    id: 1,
    username: "rashika",
    password: "1234"
};


// =================================
// LOGIN
// =================================

router.post("/login", function(req, res) {

    const username = req.body.username;
    const password = req.body.password;


    // Check username and password

    if (
        username === user.username &&
        password === user.password
    ) {


        // Create JWT

        const token = jwt.sign(

            {
                id: user.id,
                username: user.username
            },

            SECRET_KEY,

            {
                expiresIn: "1h"
            }

        );


        return res.json({

            message: "Login successful",

            token: token

        });

    }


    res.status(401).json({

        message: "Invalid username or password"

    });

});


// =================================
// PROTECTED PROFILE
// =================================

router.get(

    "/profile",

    passport.authenticate("jwt", {
        session: false
    }),

    function(req, res) {

        res.json({

            message: "Welcome to your profile",

            user: req.user

        });

    }

);


module.exports = router;
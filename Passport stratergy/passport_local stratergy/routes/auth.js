const express = require("express");
const passport = require("../config/passport");

const router = express.Router();

router.post(
    "/login",

    passport.authenticate("local", {
        failureRedirect: "/login.html?error=1"
    }),

    function(req, res) {

        res.redirect("/auth/profile");

    }
);


router.get("/profile", function(req, res) {

    if (!req.isAuthenticated()) {

        return res.status(401).send("Please login first.");

    }

    res.json({
        message: "Welcome to Profile",
        user: req.user
    });

});


module.exports = router;
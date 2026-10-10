const passport = require("passport");

const LocalStrategy = require("passport-local").Strategy;  //local strategy means checking own database //if google  strategy means checking google database 


// Dummy user

const user = {
    id: 1,
    username: "rashika",
    password: "1234"
};


// Local Strategy

passport.use(
    new LocalStrategy(
        function(username, password, done) {

            console.log("Username:", username);
            console.log("Password:", password);


            // Check username

            if (username !== user.username) {

                return done(null, false, {
                    message: "User not found"
                });

            }


            // Check password

            if (password !== user.password) {

                return done(null, false, {
                    message: "Incorrect password"
                });

            }


            // Authentication successful

            return done(null, user);

        }
    )
);


// Store user in session

passport.serializeUser(function(user, done) {

    done(null, user.id);

});


// Retrieve user from session

passport.deserializeUser(function(id, done) {

    if (id === user.id) {

        return done(null, user);

    }

    return done(null, false);

});


module.exports = passport;
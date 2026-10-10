const passport = require("passport");

const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;


// Secret key
const SECRET_KEY = "mysecretkey";


// Dummy user
const user = {
    id: 1,
    username: "rashika"
};


// JWT options

const options = {

    jwtFromRequest:
        ExtractJwt.fromAuthHeaderAsBearerToken(),

    secretOrKey: SECRET_KEY
};


// JWT Strategy

passport.use(
    new JwtStrategy(
        options,

        function(jwt_payload, done) {

            console.log("JWT Payload:");
            console.log(jwt_payload);


            // Check user

            if (jwt_payload.id === user.id) {

                return done(null, user);

            }


            return done(null, false);

        }
    )
);


module.exports = passport;
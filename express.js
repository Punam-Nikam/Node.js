// const express = require('express')
// const app = express()

// app.get('/', function(req, res) {
//     res.send('Hello World!!!!!hhoiii!!!')
// })

// app.listen(3000)

////ROUTING
///////// 2  ///

// const express = require('express');
// const app = express();

// app.get("/",function(req,res) {
//     res.send("Hello guys!!");
// });

// //////SOME REQ AND RES IN BASIC 

// app.get("/profile",function(req,res){
//     res.send("Here is profile!");
// });

// app.listen(3000);


/////////  3  ///  MIDDLEWARE 

const express = require('express');
const app = express();

app.use(function(req,res,next){
    console.log("MiddleWare is running");
    next();   //next is mandatory to go to next route(backend)
});

app.use(function(req,res,next){
    console.log("Again middleware running");
    next();
});

app.get("/",function(req,res){
    res.send("My final route is got here after middleware!!")
});

app.get("/about",function(req,res){
    res.send("Aboutttt!!")
});
////from this and above code is for error handling

app.get("/profile",function(req,res,next){      ////this will print on browser
    return next(new Error("Somthing went wrong"));
    
});

app.use((err,req,res,next) => {
    console.error(err.stack)   ///this will show in console
    res.status(500).send('Something looks broken bro!! isnt is your heart??');
    
});
app.listen(3000);


/////ERROR HANDLINGG |^^^| uper wala/////
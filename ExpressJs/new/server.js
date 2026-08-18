const express = require("express");
const path = require("path");

const app = express();
const PORT =3000;

//parse form data(application/x-www-form-urlencoded)

app.use(express.urlencoded({extended:true}));

//serve the html file
app.get("/",(req,res) => {
    res.sendFile(path.join(__dirname,"public","index.html"));

});

//handle form submission
app.post("/student",(req,res) => {
    const {name,course} = req.body;

    console.log("student name : ",name);
    console.log("Course : ", course);

    res.send(`
        <h1>Student submitted</h1>
        <p>Name : ${name}</p>
        <p>Course : ${course}</p>
        <a href="/">Go Back</a>
    `);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
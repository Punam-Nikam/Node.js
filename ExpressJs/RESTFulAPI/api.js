const express = require("express");
const app =express();

//middleware
app.use(express.json());

app.use(express.static("public"));

let students = [
    {
        id:1,
        name : 'Virat Kohli',
        age : 22
    },
    {
        id : 2,
        name : "Devdutt padikal",
        age : 20
    }
];



//get all students

app.get("/students", (req,res) => {
    res.json(students);
});

//post route
app.post("/students", (req,res) => {

    const newStudent = {
        id : students.length +1,
        name : req.body.name,
        age : req.body.age,
        course : req.body.course
    };

    students.push(newStudent);

    res.status(201).json({
        message : "student added successfully",
        student : newStudent
    });
});

// update student

app.put("/students/:id", (req,res) => {
    const id = parseInt(req.params.id);

    const student = students.find(student => student.id == id);
    
    if(!student) {
        return res.status(404).json({
            message : "student not found"
        });
    }

    student.name = req.body.name;
    student.age = req.body.age;
    student.course = req.body.course;

    res.status(200).json({
        message : "student updated successfully",
        student : student
    });
});

//delete student

app.delete("/students/:id", (req,res) => {
    const id = parseInt(req.params.id);

    const index = students.findIndex(student => student.id == id);

    if(index == -1) {
        return res.status(404).json({
            message : "student not found"
        });
    }

    students.splice(index,1);

    res.status(200).json({
        message: "student deleted successfully"
    });
});



app.listen(3000, function() {
    console.log("Server running on : http://localhost:3000");
});
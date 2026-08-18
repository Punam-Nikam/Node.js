const express = require('express');
const fs = require('fs');

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Serve HTML page
app.use(express.static('public'));

// ====================================
// Function to Read Student Data
// ====================================

function readStudents() {
    const data = fs.readFileSync('students.json', 'utf8');
    return JSON.parse(data);
}

// ====================================
// Function to Write Student Data
// ====================================

function writeStudents(students) {
    fs.writeFileSync(
        'students.json',
        JSON.stringify(students, null, 4)
    );
}

// ====================================
// 1. GET
// Get all students
// ====================================

app.get('/students', function (req, res) {
    const students = readStudents();

    res.json(students);
});

// ====================================
// 2. POST
// Add a new student
// ====================================

app.post('/student', function (req, res) {
    const students = readStudents();

    const newStudent = req.body;

    students.push(newStudent);

    writeStudents(students);

    res.json({
        message: 'Student added successfully',
        student: newStudent
    });
});

// ====================================
// 3. PUT
// Completely update a student
// ====================================

app.put('/student/:id', function (req, res) {
    const students = readStudents();

    const id = Number(req.params.id);

    const index = students.findIndex(function (student) {
        return student.id === id;
    });

    if (index === -1) {
        return res.status(404).json({
            message: 'Student not found'
        });
    }

    students[index] = {
        id: id,
        name: req.body.name,
        course: req.body.course,
        age: req.body.age
    };

    writeStudents(students);

    res.json({
        message: 'Student completely updated',
        student: students[index]
    });
});

// ====================================
// 4. PATCH
// Partially update a student
// ====================================

app.patch('/student/:id', function (req, res) {
    const students = readStudents();

    const id = Number(req.params.id);

    const index = students.findIndex(function (student) {
        return student.id === id;
    });

    if (index === -1) {
        return res.status(404).json({
            message: 'Student not found'
        });
    }

    // Update only fields received in the request

    if (req.body.name !== undefined) {
        students[index].name = req.body.name;
    }

    if (req.body.course !== undefined) {
        students[index].course = req.body.course;
    }

    if (req.body.age !== undefined) {
        students[index].age = req.body.age;
    }

    writeStudents(students);

    res.json({
        message: 'Student partially updated',
        student: students[index]
    });
});

// ====================================
// 5. DELETE
// Delete a student
// ====================================

app.delete('/student/:id', function (req, res) {
    const students = readStudents();

    const id = Number(req.params.id);

    const index = students.findIndex(function (student) {
        return student.id === id;
    });

    if (index === -1) {
        return res.status(404).json({
            message: 'Student not found'
        });
    }

    const deletedStudent = students.splice(index, 1)[0];

    writeStudents(students);

    res.json({
        message: 'Student deleted successfully',
        student: deletedStudent
    });
});

// ====================================
// Start Server
// ====================================

app.listen(3000, function () {
    console.log('Server running at http://localhost:3000');
});
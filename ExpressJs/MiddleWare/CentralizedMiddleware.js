const express = require("express");

const app = express();

// Middleware to read JSON data
app.use(express.json());

// Sample student data
const students = [
    {
        id: 1,
        name: "Asha",
        course: "MCA"
    },
    {
        id: 2,
        name: "Riya",
        course: "MCA"
    }
];

// Home Route
app.get("/", function (req, res) {
    res.status(200).json({
        success: true,
        message: "Welcome to Student API"
    });
});

// Get All Students
app.get("/students", function (req, res) {
    res.status(200).json({
        success: true,
        data: students
    });
});

// Get Student by ID
app.get("/students/:id", function (req, res, next) {
    try {
        const studentId = Number(req.params.id);

        // Check whether ID is a valid number
        if (isNaN(studentId)) {
    const error = new Error("Student ID must be a number");
            error.statusCode = 400;

            return next(error);
        }

        // Find student
        const student = students.find(function (student) {
            return student.id === studentId;
        });

        // If student is not found
        if (!student) {
            const error = new Error("Student not found");
            error.statusCode = 404;

            return next(error);
        }

        // Send student data
        res.status(200).json({
            success: true,
            data: student
        });

    } catch (error) {
        next(error);
    }
});

// Route to demonstrate server error
app.get("/error", function (req, res, next) {
    try {
        throw new Error("Something went wrong on the server");
    } catch (error) {
        next(error);
    }
});

// 404 Middleware for undefined routes
app.use(function (req, res, next) {
    const error = new Error("Route not found statusCode = 404");
    error.statusCode = 404;

    next(error);
});

// Centralized Error-Handling Middleware
app.use(function (err, req, res, next) {
    console.log("Error:", err.message);

    const statusCode = err.statusCode || 500;

    const message = err.message || "Internal Server Error";

    res.status(statusCode).json({
        success: false,
        message: message
    });
});

// Start Server
const PORT = 3000;

app.listen(PORT, function () {
    console.log("Server is running on http://localhost:" + PORT);
});

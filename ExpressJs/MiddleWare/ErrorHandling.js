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


// ===============================
// HOME ROUTE
// ===============================

app.get("/", function (req, res) {
    res.status(200).json({
        success: true,
        message: "Welcome to Student API"
    });
});


// ===============================
// GET ALL STUDENTS
// ===============================

app.get("/students", function (req, res) {
    res.status(200).json({
        success: true,
        data: students
    });
});


// ===============================
// GET STUDENT BY ID
// ===============================

app.get("/students/:id", function (req, res, next) {

    try {

        const studentId = Number(req.params.id);

        // Check whether ID is a valid number
        if (isNaN(studentId)) {

            const error = new Error("Student ID must be a number");

            error.statusCode = 400;
            error.type = "VALIDATION_ERROR";

            return next(error);
        }


        // Find student
        const student = students.find(function (student) {
            return student.id === studentId;
        });


        // Student not found
        if (!student) {

            const error = new Error("Student not found");

            error.statusCode = 404;
            error.type = "STUDENT_NOT_FOUND";

            return next(error);
        }


        // Send student data
        res.status(200).json({
            success: true,
            data: student
        });

    } catch (error) {

        error.type = "SERVER_ERROR";

        next(error);
    }
});


// ===============================
// ROUTE TO DEMONSTRATE SERVER ERROR
// ===============================

app.get("/error", function (req, res, next) {

    try {

        throw new Error("Something went wrong on the server");

    } catch (error) {

        error.type = "SERVER_ERROR";

        next(error);
    }
});


// ==================================================
// 404 MIDDLEWARE FOR UNDEFINED ROUTES
// ==================================================

app.use(function (req, res, next) {

    const error = new Error("Route not found");

    error.statusCode = 404;
    error.type = "ROUTE_NOT_FOUND";

    next(error);
});


// ==================================================
// 1. VALIDATION ERROR MIDDLEWARE
// ==================================================

app.use(function (err, req, res, next) {

    if (err.type === "VALIDATION_ERROR") {

        console.log("Validation Error:", err.message);

        return res.status(400).json({
            success: false,
            errorType: "Validation Error",
            message: err.message
        });
    }

    next(err);
});


// ==================================================
// 2. STUDENT NOT FOUND ERROR MIDDLEWARE
// ==================================================

app.use(function (err, req, res, next) {

    if (err.type === "STUDENT_NOT_FOUND") {

        console.log("Student Error:", err.message);

        return res.status(404).json({
            success: false,
            errorType: "Student Not Found",
            message: err.message
        });
    }

    next(err);
});


// ==================================================
// 3. ROUTE NOT FOUND ERROR MIDDLEWARE
// ==================================================

app.use(function (err, req, res, next) {

    if (err.type === "ROUTE_NOT_FOUND") {

        console.log("Route Error:", err.message);

        return res.status(404).json({
            success: false,
            errorType: "Route Not Found",
            message: err.message
        });
    }

    next(err);
});


// ==================================================
// 4. SERVER ERROR MIDDLEWARE
// ==================================================

app.use(function (err, req, res, next) {

    if (err.type === "SERVER_ERROR") {

        console.log("Server Error:", err.message);

        return res.status(500).json({
            success: false,
            errorType: "Server Error",
            message: err.message
        });
    }

    next(err);
});


// ==================================================
// 5. FINAL ERROR MIDDLEWARE
// ==================================================

app.use(function (err, req, res, next) {

    console.log("Unknown Error:", err.message);

    const statusCode = err.statusCode || 500;

    res.status(statusCode).json({
        success: false,
        message: err.message || "Internal Server Error"
    });
});


// ===============================
// START SERVER
// ===============================

const PORT = 3000;

app.listen(PORT, function () {

    console.log(
        "Server is running on http://localhost:" + PORT
    );

});

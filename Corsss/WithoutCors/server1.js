const express = require("express");

const app = express();

app.get("/students", function(req, res) {

    res.json([
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
    ]);

});

app.listen(5000, function() {

    console.log(
        "Server running on http://localhost:5000"
    );

});
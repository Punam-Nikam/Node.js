// Q.1. Develop a node js application demonstrating core modules (fs,path,os,http) custom modules , file system operations, asynchronous programming ( reading and writing in file), and http server implementation.

// Import Core Modules

const fs = require("fs");
const path = require("path");
const os = require("os");
const http = require("http");

// Import Custom Module
const greet = require("./utils");

console.log(greet("Student"));


// PATH MODULE

console.log("\nPath Module");

console.log("Current File:", __filename);
console.log("Current Folder:", __dirname);

const filePath = path.join(__dirname, "file.txt");
console.log("File Path:", filePath);


// OS MODULE

console.log("\nOS Module");

console.log("Operating System:", os.type());
console.log("Platform:", os.platform());
console.log("Architecture:", os.arch());
console.log("CPU Cores:", os.cpus().length);
console.log("Free Memory:", os.freemem());
console.log("Total Memory:", os.totalmem());



// FILE SYSTEM MODULE


// Writing into file (Asynchronous)

fs.writeFile(
    filePath,
    "Welcome to Node.js File System!",
    (err) => {

        if (err)
            throw err;

        console.log("\nFile Written Successfully!");

        // Reading File Asynchronously

        fs.readFile(filePath, "utf8", (err, data) => {

            if (err)
                throw err;

            console.log("File Content:");
            console.log(data);

        });

    }
);

// HTTP SERVER

const server = http.createServer((req, res) => {

    res.writeHead(200, {
        "Content-Type": "text/plain"
    });

    res.end("Hello! HTTP Server is Running.");
});

server.listen(3000, () => {
    console.log("\nServer running at http://localhost:3000");
});
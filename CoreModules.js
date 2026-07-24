// core modules program to demonstrate the use of fs module in node js

const fs = require("fs");

// Create new file  and write in that file

fs.writeFile("newfile.txt", "Hello, this is a sample text file.", (err) => {
    if (err) 
        throw err;
    console.log("File created and data written successfully.");
});


// read the file constent and display 

fs.readFile("readfile.txt", "utf8", (err, data) => {
    if (err) 
        throw err;  
    console.log("File content: " + data);
});
// copying file 

const fs = require("fs");



fs.copyFile("newfile.txt","copiedFile.txt",(err,data) => {
    if(err) 
        console.error("Error to copy the file ",err);
      
    console.log("File copied successfully!!.",data);
});
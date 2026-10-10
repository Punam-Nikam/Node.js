//Async file reading 

const fs = require('fs');
console.log("1.Staring asnc reading ... ");
fs.readFile('newfile.txt','utf8', (err,data) =>{
    if(err)
        throw err;
    console.log("2.File contents - ",data);
});

console.log("3.Done read operations");
// Synchronous file reading

const fs = require("fs");

console.log("1,Starting sync reading .. ");
const data = fs.readFileSync("newfile.txt","utf8");

console.log("2. File contents:",data);
console.log("3.Done reading file");
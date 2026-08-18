//Promise with promise.all() for file operation


var fs= require("fs").promises;

const promise1 = fs.readFile("newfile.txt","utf8");
const promise2 = fs.readFile("readfile.txt","utf8");
const promise3 = fs.readFile("new.txt","utf8");


Promise.all([promise1,promise2,promise3])
.then(results => {
    // console.log(results);

    console.log("\nFile 1 : ");
    console.log(results[0]);
    console.log("Promise 1 is completed !!\n")

    console.log("File 2 : ");
    console.log(results[1]);
    console.log("Promise 2 is completed !!\n")

    console.log("File 3 : ");
    console.log(results[2]);
    console.log("Promise 3 is completed !!\n")

})

.catch(err =>{
    console.log(err);
})
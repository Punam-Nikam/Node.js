// file reading using promises

var fs= require("fs").promises;

fs.readFile("newfile.txt","utf8")
.then(function(data){
    console.log(data);
})

.catch(function(err){
    console.log(err);
});
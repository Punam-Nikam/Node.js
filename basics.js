const fs =require('fs');     //fs is a module in node.js that provides an API for interacting with the file system. It allows you to read, write, and manipulate files and directories on your computer. The fs module provides both synchronous and asynchronous methods for performing file operations, making it a powerful tool for working with files in Node.js applications.



////////fs.writeFile(path,data[,options],callback)    ==>//callback means function.

// fs.writeFile("Hey.txt","Hello,im writing my first node program", function(err){
//     if(err) 
//         console.error(err);
//     else 
//         console.log("file created and writen successfully");
// })




////////fs.appendFile(path,data[,options],callback)     ==>//callback means function.

// fs.appendFile("Hey.txt"," now i will do master in node.js",function(err){
//     if(err)
//         console.error(err);
//     else
//         console.log("append done");
// })






// /////////Rename=> fs.rename(oldPath,newPath,callback)

// fs.rename("Hey.txt","hello.txt",function(err){
//     if(err)
//         console.error(err);
//     else 
//         console.log("Done rename")
// })






///////Copy the file => fs.copyFile(src,dest,callback)

// fs.copyFile("hello.txt","./copyile/copy.txt",function(err){
//     if(err)
//         console.log(err.message);
//     else
//         console.log("File copied");
// })







////////unlink => fs.unlink(path,callback)

// fs.unlink("./copyfile/copy.txt",function(err){
//     if(err)
//         console.error(err);
//     else
//         console.log("File deleted");
// })








//////////Read the file => fs.readFile(path[,options],callback)

// fs.readFile("hello.txt","utf-8",function(err,data){
//     if(err)
//         console.error(err);
//     else
//         console.log("File content:",data);
// })  






////rmdir => fs.rmdir(path,callback)

// fs.rmdir("./copyfile",function(err){
//     if(err)
//         console.error(err);
//     else
//         console.log("Directory deleted");
// })







/////mkdir => fs.mkdir(path,callback)

    // fs.mkdir("./newdir",function(err){
    //     if(err)
    //         console.error(err);
    //     else
    //         console.log("Directory created");
    // })







///fs.readdir(path,callback)

fs.readdir("./",function(err,files){
    if(err)
        console.error(err);
    else
        console.log("Files in current directory:",files);
    })



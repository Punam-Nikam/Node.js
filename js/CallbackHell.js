const fs= require('fs');
fs.readFile('new.txt','utf-8',(err,data1) => {
    if(err) 
        throw err,

        fs.readFile('newfile.txt','utf-8',(err,data2) => {
        if(err) 
            throw err,

            fs.writeFile('output.txt',data1 +data2,(err) => {
            if(err) 
                throw err,
            console.log("Files merged successfully!");
        });
    });
});     
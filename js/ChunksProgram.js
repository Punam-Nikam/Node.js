// Prgram to demonstrate the conecpt of chunks and streams

const fs = require('fs');
// const { constrainedMemory } = require('process');

// const stream = fs.createReadStream('readfile.txt','utf-8');

// stream.on('data',function(chunk) {
//     console.log(chunk);
// })

//const { constrainedMemory } = require('process');
//const { getDefaultHighWaterMark } = require('stream');

const stream = fs.createReadStream('new.txt',{encoding:"utf8",highWaterMark:100});

console.log("Im Reading the file bro ...\n");

stream.on('data',function(chunk) {
    console.log("Chunk recieved");
    console.log(chunk);
    console.log("Size of chunks: "+Buffer.byteLength(chunk)+"bytes");
    console.log("---------------------")
})
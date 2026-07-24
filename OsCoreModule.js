//  program to demonstrate the use of os module in node js

const os = require("os");

console.log("Platform : "+os.platform());
console.log("Architecture : "+os.arch());
console.log("Machine : "+os.machine());
console.log("Temporary Directory : "+os.tmpdir());
console.log("OS Type : "+os.type());
console.log("OS Release : "+os.release());
console.log("Host name : "+os.hostname());
console.log("Network interface : "+os.networkInterfaces());
console.log("Available Parallelism : "+os.availableParallelism());
console.log("CPU Info : "+os.cpus());
console.log("Free Memory : "+os.freemem());
console.log("Total Memory : "+os.totalmem());
console.log("Uptime : "+os.uptime());
// console.log("User Info : "+os.userInfo());
console.log("Endianness : "+os.endianness());
console.log("Home Directory : "+os.homedir());
console.log("Load Average : "+os.loadavg());

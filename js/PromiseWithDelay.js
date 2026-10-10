//Promises with delays

var promise = new Promise(function(resolve,reject){
    setTimeout(function() {

        resolve("data loaded ");
    },3000);
});

promise.then(function(message){
    console.log(message);
});

console.log("Loading..");

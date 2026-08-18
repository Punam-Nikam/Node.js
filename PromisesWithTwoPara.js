//simple promise
var promise = new Promise(function(resolve, reject) {

    resolve("Promise Completed Successfully !!");

});

promise.then(function(result) {

    console.log(result);

});

// var promise =  new Promise((resolve, reject) => {
//     reject("Error Occurred");
// });

// promise.then(function(result){
//     console.log(result);
// },
// function(error){
//     console.log(error);
// });


//error using .catch function instead of error function

var promise =  new Promise((resolve, reject) => {
    reject("Error Occurred");
});

promise.then(function(result){
    console.log(result);
})
.catch
(function(error){
    console.log(error);
});



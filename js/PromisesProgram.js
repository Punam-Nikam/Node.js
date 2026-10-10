//Program to demontsrate use of promises (Asynchronous programming)

const promise = new Promise((resolve,reject) => {
    let success=true;
    if(success){
        resolve("Data loaded");   
    }
    else{
        reject("Loading failed");
    }
});

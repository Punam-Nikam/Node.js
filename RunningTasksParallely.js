//running tasks in parallel

function delay(ms,value) {
    return new Promise(resolve => {
        setTimeout(() => resolve(value),ms);
    });
}

Promise.all([
    delay(3000,"A"),
    delay(1000,"B"),
    delay(2000,"C")
]).then(results => {
    console.log(results);
});

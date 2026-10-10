//Promise.all() using Promise.reject() and Promise.resolve() 

Promise.all([
    Promise.resolve("A"),
    Promise.reject("Error"),
    Promise.resolve("C")
])

.then(console.log)

.catch(console.log);
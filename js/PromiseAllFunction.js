//Promise all function basic programs

const p1 = Promise.resolve("Apple");
const p2 = Promise.resolve("Strawberry");
const p3 = Promise.resolve("PineApple");

Promise.all([p1,p2,p3])
.then(result => {
    console.log(result);
});
let obj={
    //anythong in the curly braces with something in leftside : something in right side is called object(like,key value pair)
    name:"pikachu",
    age:19,
    game:"cricket",
    edu:"mca"

}
console.log(obj['game']);  //it is used to access the value of the particular key in the object
// OR
console.log(obj.age);  //it is also used to access the value of the particular key in the object

obj.age=22;  //it is used to change the value of the particular key in the object
//if we dont wanna change value of the particular key in the object then we can use const instead of let
//orrrrr
//use 
Object.freeze(obj.age);
//it is used to freeze the particular key in the object so that we cannot change its value
console.log(obj.age=44);  //it will return 19 because we have frozen the age key in the object
console.log(obj.age);
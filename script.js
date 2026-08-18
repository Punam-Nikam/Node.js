// alert();

//ForEach loop working...
var arr=[1,4,5,2,9];
arr.forEach(function(val) {
    console.log(val+" met"); 
})

//Map function working...

var Arr=[4,5,6,7];
let newArr=Arr.map(function(val){
    return val;
})

console.log(newArr);

var a=[3,2,1,5,7];
let na=a.map(function(v){
    console.log("New arr -> ",v*2);
});

// filter function working

let f=[8,2,4,6,1,0,-22,5,11,322];
let ans=f.filter(function(i){
    if(i%2==0){
        return true;  //filters out the even numbers
    }
    else{
        return false;  //it is by default false..no need to write else part
    } 
})
console.log(ans);

// find function working

let ff=[1,2,3,4,5];
var newf=ff.find(function(j){
    if(j==2){
        return j;
    }
})                  //used to find the particular element based on condition
console.log(newf);  //it returns the first element that satisfies the condition

//indexof function working

let c=[12,32,55,776,23];
var i=c.indexOf(23);  //returns the index of the particular element
console.log(i);  //it returns -1 if element is not found

//reduce function working   
let d=[1,2,3,4];
var r=d.reduce(function(acc,cv){
    return acc+cv;
},0)   //accumulator and current value
console.log(r);  //it returns the single value after reducing the array based on the condition
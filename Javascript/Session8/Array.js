/// Map --- It will perform some action on each element of the array 
// and resultant would be a new array being created
/// Filter
// let fruits = ['Mango','Apple','Banana','Kiwi','Gauva'];

// function <functionname>(){

// }
// let <FunctionName>= function(){

// }

// let <functionName> = ()=>{
    
// }
//fruits.map()
/*
Manage ---- 0
Apple ----1
Banana --- 2
*/
// let newArray = fruits.map(function (value,index){
    
//     return value+" fruit" + index;
// })


// console.log(fruits);
// console.log(newArray);

let numArray = [3,5,19,6,20,50];

let newNumArray = numArray.filter((value)=>{
    return value > 6;
})

console.log(numArray);
console.log(newNumArray);
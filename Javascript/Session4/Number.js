// let myNum = -5.1234556 ; // positive /Negative / Decimal 

// console.log(typeof(myNum));


//console.log(myNum.toPrecision(5))

// console.log(typeof(myNum.toString()));

/// Max_Value --- It provides the largest number in Javascript
/// Min_Value --- its provides the lowest number in Javascript
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);

/// Math functions.

/*
Math.round(x)
Math.Ceil(x)
Math.floor(x)
Math.Random
*/


let myNumber = 1.64345352452345234

//console.log(Math.round(myNumber));
// console.log(Math.ceil(myNumber))
// console.log(Math.floor(myNumber));
/// Math.Random ---- Number which is greater than 0 < Random > 1
let maxValue = 100
let minValue = 1
console.log(Math.round((maxValue - minValue)*(Math.random().toPrecision(2))+minValue));
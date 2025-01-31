/// String  "", ''
/// its is a collection of characters

// let myString = "This is a javascript class";
// let mySecondString = 'This is also a javascript class'


// console.log(typeof(myString));
// console.log(typeof(mySecondString));


// for(let index=0 ; index<myString.length;index++){
//     console.log(myString[index]);
// }

// Concatenate string 
// adding two string 
// apending the existing string.

//let combinedString = myString + mySecondString;

//console.log(combinedString);
// let student = ['Mrunali', 'Debashree'];
// let sampleString = `Today only two students attended the class and their names are ${student[0]}  and ${student[1]}  `;
// //et sampleSecStr = "Today only two students attended the class and their names are "+student[0]+" and "+student[1];

// //charAt()
// // for(let index=0 ; index<sampleString.length;index++){
// //     console.log(sampleString.charAt(index));
// // }
// console.log(sampleString + ":");
// let newString = sampleString.trim();
// console.log(newString+":");
// console.log(sampleString + ":");

// Split string---- two parameters which we are using 
// seperator --- character, symbol using which we will be spliting a string;
// Limit ---- this will limit the element stored in the string array.

let myString = "Today only $two students $attended the class";

let splitstr = myString.split('$',2);
console.log(splitstr);
console.log(splitstr.length);




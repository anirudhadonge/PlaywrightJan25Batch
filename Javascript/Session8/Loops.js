/*1. Normal For Loop with Index
2. While Loop
3. Do While Loop
4. for-of Loop  for(let a of srt) //// it deals with the value 
5. for-in loop  for (let a in srt)*//// it deals with the key

// while(){
    
// }
// let num = 0
// while(num>20){
//  num++
//  console.log(num);
// }

// for(let index = 0 ; index <=; index){

// }

// do{
//  num++
//  console.log(num);
// }while(num>20)

let fruits = ['Mango','Apple','Banana','Kiwi','Gauva'];
/* 
[key, value]
[
Mango - 0
Apple - 1
Banana -2
Kiwi - 3
Gauva - 4
]
*/
// for(let fruit of fruits){
//     console.log(fruit);
// }

// for(let fruit of fruits){
//     console.log(fruit);
// }


// for(let key in fruits){
//     console.log(key);
// }


let student ={
    name:"Anirudha",
    rollNumber:7,
    Marks:60
}

for(let key in student){
    console.log(`${key} : ${student[key]}`);
}
/// function inside a function is called as Callback function
///  <Access Modifier> <Return Type> <Function Name> (<Parameters)
///
// let fun = function(){

// }

// function fun1(){

// }

// let fun = function(){
//     console.log("This is first function");
// }

// fun();

// function fun(a,b){
//      return a+b;
// }

// console.log(fun(4,5));
// console.log(typeof(fun(4,5)));

// console.log(fun(4,"Anirudha"));
// console.log(typeof(fun(4,"Anirudha")));

// console.log(fun("I am a trainer","Anirudha"));
// console.log(typeof(fun("I am a trainer","Anirudha")));
// pass by value and Pass by reference

// let demoVar = 4
// function fun(a){
// a =  a+1;
// return a;
// }

// console.log(fun(demoVar));
// //console.log(fun(5));

// console.log(demoVar);
// function invoke() {
//   return new Promise((resolve,reject) => {
//     setTimeout(() => {
//       console.log("My Set Time out function is invoked");
//       resolve("Success");
//     }, 5000);
//   });
// }

// function executeArrowFunction() {
//   return new Promise((resolve,reject) => {
//     setTimeout(() => {
//       console.log("Example of Array Function");
//       resolve("Success");
//     }, 3000);
//   });
// }

// function endFunction() {
//   return new Promise((resolve,reject) => {
//     setTimeout(() => {
//       console.log("My Set Time out function exection is finished.");
//       resolve("Success");
//     }, 1000);
//   });
// }

// My Set Time out function is invoked
// Example of Array Function
// My Set Time out function exection is finished.

/// Javascript start the execution at line 46 and does wait for this to complete
//// it goes to next line of code and ask to execute , without wait to complete , it will ask line 50 to execute

// await invoke()
// await executeArrowFunction()
// await endFunction()


// function firstFun(secondFun){
//   secondFun();
// }

// function secondFun(){
//   console.log('This is the second/Call Back function');
// }

// firstFun(secondFun);


// function myFunction(par1, par2){
//   return par1,par2
// }

// myFunction(4,5)

// (par1,par2) =>{
//   return par1+par2
// }


let fruits = ['Orange','Apple','Kiwi']
function iterate(value){
  console.log(value)
}

fruits.forEach((value)=>{
console.log(value);
});

// Call back function javascript
/// function inside a function as a parameter
// setTimeout(()=>{
// console.log('This is a setTime out function')
// },3000)
// function func2(){
//   console.log('This a function');
// }

// function func1(fun2){
//   fun2();
// }

// func1(()=>{
//   console.log('This is a function');
// })
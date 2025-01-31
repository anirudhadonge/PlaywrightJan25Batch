// let flag ;

// // flag = 1;

// // console.log(typeof(flag));


// flag = true
// console.log(flag);
// console.log(typeof(flag));

// flag = false;
// console.log(flag);
// console.log(typeof(flag));


// let myString = "This is a string";
// let mySecondString = 'This is a second string'
// console.log(typeof(myString));
// console.log(typeof(mySecondString));

// for(let i =0 ; i < myString.length;i++){
//     console.log(myString[i]);
// }


//// Undefined

// let myVariable = null ;


// console.log(myVariable);


//Arrays

// let myArray = ['Anirudha', 'Debashree','Mrunali',1, true,]
// myArray.push(-1.233434);
// //console.log(typeof(myArray));
// console.log(myArray);
// for(let i =0 ; i < myArray.length;i++){
//     console.log(typeof(myArray[i]));
// }


//// Objects 


// let myVariable ;

// myVariable = true;

// console.log(typeof(myVariable))

// myVariable = 4;
// console.log(typeof(myVariable))
///(wheelsize, Capacity, enginesize)
// let Car  = {
//     wheelsize: 4,
//     Capacity: 4,
//     EngineSize: 2
// }

let student ={
    Name:'Anirudha',
    RollNo:1,
    Flag: true
}
// student['Name']= 'Debashree'
// console.log(student);


function processAnObject(myStudent){

    console.log(myStudent.Name);
    console.log(myStudent.Flag);
    console.log(myStudent.RollNo);

}



processAnObject(student);
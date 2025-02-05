// let car ={
//     Name:"",
//     display : function(){
//         console.log('display function')
//     }
// }

// let maruti ={
//     Wheels:4,
//     __proto__:car,
//     display : function(){
//         this.__proto__.display();
//         console.log('display function of maruti');
//     }
// }


// let Zen = new maruti();


// console.log(Zen);

let fun = function(x,y){
    this.x = x;
    this.y = y;
    display=()=>{
        console.log(`display function ${x} abd ${y}`);
    }
}


let fun1 = new fun(5,4);
fun1.display();
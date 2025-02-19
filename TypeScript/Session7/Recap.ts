/// Typescript is wrapper over javascript. 
/// Typescript is typed couple language --- you need to specify a type while declaring method , variable.

function add(a:number,b:number):number{
return a+b
}

//console.log(typeof add(4,5));
//console.log(typeof add('Anirudha','tutor'));

let var1:number;


/// object 
type book1 ={
    name:string,
    noofPage:number,
    Author:string
}

interface book {
    name:string,
    noofPage:number,
    Author:string
}

let letusc1:book1 ={
    name:"Let Us C",
    noofPage:20,
    Author:'xyz'
}

let letUsC :book ={
    name:"Let Us C",
    noofPage:20,
    Author:'xyz'
}


class student {
    name:string
    rollNumber:number

    constructor(name:string,rollNumber:number){
        this.name=name;
        this.rollNumber=rollNumber;
    }
}

let anirudha = new student('anirudha',7);
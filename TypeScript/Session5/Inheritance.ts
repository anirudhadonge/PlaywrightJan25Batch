// /**
//  * Implements: You are trying to implement a interface
//  * Extents: When you are extending a class.
//  *  
//  */


// /**
//  * Interface : When you dont have any Idea about the implementation. you list of key features of the product and document it.
//  */


// // interface laptop {

// //     ram:number;
// //     displaySize:number;
// //     diskspace:number;

// //     displayWorking():void;
// // }


// // class MicrosoftSurface implements laptop{
// //     ram: number;
// //     displaySize: number;
// //     diskspace: number;
// //     // constructor(ram:number,displaySize:number,diskspace:number){
// //     //     this.ram=ram;
// //     //     this.displaySize=displaySize;
// //     //     this.diskspace=diskspace;
// //     // }
// //     displayWorking(): void {
// //         console.log("This has a OLED screen with Touch sensativity")
// //     }
// // }

// // let msLaptop :MicrosoftSurface = new MicrosoftSurface();

// // msLaptop.displayWorking();

// class human{
//     height:number

//     constructor(height){
//         this.height = height;
//     }

//     sleeping(){
//         console.log('Human like sleeping');
        
//     }

//     work(){
//         console.log("Human work to earn their bread");
//     }
// }


// class Engineer extends human{
//     static value:number;
//     degree:string

//     constructor(height, degree){
//         super(height);
//         this.degree= degree;
//     }
//     sleeping(){
//         console.log('Engineers go to sleep in morning');
//     }

//     work(){
//         console.log("Engineer builds new product and technology");
//     }

//     static statMethod(){
//         console.log(this.value);
//     }
// }

// let anirudha:Engineer = new Engineer(5.6,'BE-Mech'); /// 

// anirudha.sleeping();
// anirudha.work();
// console.log(anirudha.degree); // Instance variable
// console.log(anirudha.height); // Instance variable
// Engineer.value = 10; /// Class variable
// Engineer.statMethod(); /// Class Method

// let tushar:Engineer= new Engineer(5, 'BE-ENTC');
// console.log(tushar.degree);
// console.log(tushar.height);
// Engineer.statMethod();
// /// Static

// // life Span of static variables is from the time the Application is loaded (started), till Application is existed (stop)


//// Abstract Class : Partial about the implementation , This class might have method declaration and implmentation and also contain abstract method.

//// Interface and Class


abstract class human{
    height:number

    constructor(height){
        this.height = height;
    }

    sleep(){
        console.log('Human like sleeping');
        
    }

    work(){
        console.log("Human work to earn their bread");
    }

    abstract eat():void;
}

class h1 extends human{
    eat() {
        console.log('Likes to eat sweets');
    }

}

let objH1 : h1 = new h1(6);
objH1.eat();
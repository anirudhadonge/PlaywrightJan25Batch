// /// For creating a class we need use the key call "class"
// /// fields
// /// constructor
// /// Method
// /// Getters and setters
// /// member visibility
// /// public , private , protect
// /// implements and extends
// //// THe access modifier for fields and method is public by default, these are public , you can access then from outside of the class
// // class student {

// //     private name: string; // fields
// //     private rollNumber:number; //fields

// //     constructor(name:string,rollNumber:number){
// //         console.log(`Initializing the class`);
// //         this.name = name;
// //         this.rollNumber = rollNumber;
// //     }

// //     set studentName(name:string){
// //         this.name = name;
// //     }
// //     set studentRollNumber(rollNo:number){
// //         this.rollNumber = rollNo;
// //     }

// //     get GetStudentName():string{
// //         return this.name;
// //     }

// //     get GetRollNumber():number{
// //         return this.rollNumber;
// //     }

// //     private display():void {
// //         console.log(`name of the student is ${this.name} and roll number is ${this.rollNumber}`);
// //     } // Method
// // }

// /// Implements : Interface (idea and we are not sure of implementation)

// // interface human {
// //     workType:string
// //     work():void;
// // }

// // class Engineer implements human{
// //     workType: string;
// //     name: string;
// //     height: number;
// //     work(): void {
// //         console.log("Engineer designes and builds new things")
// //     }
// // }

// // class Doctor implements human{
// //     workType: string;
// //     work(): void {
// //         console.log("Doctor would help Patients to recover from illness")
// //     }
// // }

// // let engineerObj = new Engineer();
// // engineerObj.workType='Mechanical Engineer'



// class Laptop{
//     name:string;
//     brand:string;
//     Ram:number;
//     processor:string

//     constructor(name:string,brand:string,Ram:number,processor:string){
//         this.name = name;
//         this.brand = brand;
//         this.Ram = Ram;
//         this.processor =processor;
//     }
// }


// class MicrosoftSurface extends Laptop{
//     touch:boolean 
//     constructor(name:string,brand:string,Ram:number,processor:string,touch:boolean){
//         super(name,brand,Ram,processor);
//         this.touch=touch;    
        
//     }
// }
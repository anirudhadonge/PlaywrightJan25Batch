//// Class is a template using which we can create object
//// Class
/// Instainance variable and Method are accessible only after initializing the object
/// let Anirudha = new student
/// Class Variable which are marked as static those variables can directly accessed using 
/// class name , student.statvar

let student = class  {
    #privateVar;
    static statVar = 10;
    constructor(name,marks,privateValue){
        this.name = name;
        this.marks = marks;
        this.#privateVar = privateValue;
    }

    display(){
        console.log(`name :${this.name} and Marks : ${this.marks}`);
    }

    getPrivateVar(){
        return this.#privateVar
    }

    static staticFun(){
        console.log('This is static function');
    }
}


class man {
    constructor(name){
        this.name = name;
    }
}

module.exports = tudent,man;

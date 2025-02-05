/// OOPS
/// Abstraction, Encapsulation,Inheritance,Polymorphism(many forms)
export class human{
    constructor(name){
        this.name = name;
    }

    sleep(){
        console.log("Man sleeps at night");
    }

    build(){
        console.log('Human can build new things')
    }
}


export class Engineer extends human{
    
    constructor(name){
        super(name);
    }

    build(){
        console.log('An Engineer will build new things');
    }
}


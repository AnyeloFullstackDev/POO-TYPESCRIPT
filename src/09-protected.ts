export class Animal {
    constructor(
        protected name: string,
    ){}

    move(){
        console.log('Moving along!');
    }

    greeting(){
        return `Hello, Im ${this.name}`
    }
    
    protected doSomething (){
       console.log('doooo')
    }
}

export class Dog extends Animal {

    constructor(
        name: string,
        public owner: string
        
    )
    {
        super(name)
    }
    
    woof(times: number): void {
        for (let index = 1; index <= times; index++){
            console.log(`woof ${this.name}`)
        }
        
        this.doSomething();
    }

    move(){
        console.log('moving as a dog');
        super.move();
    }

   
}


const cheis = new Dog('cheis', 'anyelo')
cheis.woof(1)
cheis.move();

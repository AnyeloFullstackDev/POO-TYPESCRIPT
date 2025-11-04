export class Animal {
    constructor(
        public name: string,
    ){}

    move(){
        console.log('Moving along!');
    }

    greeting(){
        return `Hello, Im ${this.name}`
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
    woof(times: number): void{
        for (let index = 1; index <= times; index++){
            console.log('woof =>', index)
        }
    }
}

const fifi = new Animal('fifi')
fifi.move();
console.log(fifi.greeting());

const cheis = new Dog('cheis', 'anyelo')
cheis.move();
console.log(cheis.greeting())
cheis.woof(5)

console.log(cheis)
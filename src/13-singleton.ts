export class MyService {

    static instance: MyService | null = null;

    private constructor(private name: string){}

    getName(){
        return this.name
    }

    static create(name: string){
        if (MyService.instance === null){
            console.log('Deberia entrar una vez')
            MyService.instance = new MyService(name)
        }
        return MyService.instance   
    }
}

const myServiceInstance = MyService.create('My Service1')
console.log(myServiceInstance.getName())
const myServiceInstance2 = MyService.create('My Service2')
console.log(myServiceInstance2.getName())
const myServiceInstance3 = MyService.create('My Service3')
console.log(myServiceInstance3.getName())

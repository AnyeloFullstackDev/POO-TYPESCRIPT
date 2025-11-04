export class MyDate {
   // esta es la forma corta de definir el constructor pero si no se define como public o private deberia definirlo con .this
    constructor (
        public year: number = 1993, 
        public month: number = 7, 
        private _day: number = 9){}

    printFormat(): string {
        const day = this.addPadding(this.day)
        const month = this.addPadding(this.month)
        return `${day}/${month}/${this.year}`;
    }

    private addPadding(value: number): string{
        if (value < 10){
            return `0${value}`
        }
        return `${value}`
    }

    add(amount: number, type: 'days' | 'month' | 'years'){
        if (type === 'days'){
            this._day += amount
        }
        if (type === 'month'){
            this.month += amount
        }
        if (type === 'years'){
            this.year += amount
        }
    }

    get day(){
        return this._day
    }

    get isLeapYear (): boolean {
        if(this.year % 400 === 0) return true;
        if (this.year % 100 === 0) return false;
        return  this.year % 4 === 0
    }
}

const myDate = new MyDate(1993, 7, 10)
console.log(myDate.printFormat())
console.log(myDate.day)
console.log(myDate.isLeapYear)

const myDate1 = new MyDate(2000, 7, 10)
console.log("2000", myDate1.isLeapYear)

const myDate2 = new MyDate(2002, 7, 10)
console.log("2002", myDate2.isLeapYear)

const myDate3 = new MyDate(2008, 7, 10)
console.log("2008", myDate3.isLeapYear)
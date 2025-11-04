console.log('Math.PI',Math.PI)
console.log('Math.max',Math.max(1,2,3,4,55,6,7,8,9,10))

class MyMath {
   static readonly PI = 3.14;

   static max(...numbers: number[]){
    console.log('numbers',numbers)
    return numbers.reduce((max, item) => (max > item ? max : item), 0);
   }
}

/* const myMath = new MyMath();
myMath.PI */

console.log('MyMath.PI',MyMath.PI)
console.log('MyMath.max',MyMath.max(1,2,3,45,5,6,7000,8,9,10))

const numbers = [1,2,3,4,5,6,7,8,9,10]
console.log('MyMath.max with spread operator',MyMath.max(...numbers))
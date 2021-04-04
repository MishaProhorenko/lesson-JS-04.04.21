'use strict'



// let perimeter = (a,b) =>  (a + b) * 2
// console.log(perimeter(7,5)) //24




let resultSum = (a, b) => {
    let sum = 0;
    for (let i = a; i <= b; i++) {
        sum += i;
    }
    return sum;
}
console.log(resultSum(15, 25))

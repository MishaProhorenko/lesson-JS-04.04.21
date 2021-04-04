'use strict'



// let perimeter = (a,b) =>  (a + b) * 2
// console.log(perimeter(7,5)) //24




// let resultSum = (a, b) => {
//     let sum = 0;
//     for (let i = a; i <= b; i++) {
//         sum += i;
//     }
//     return sum;
// }
// console.log(resultSum(15, 25))



// let getOddArray = (a, b) => {
//     let arr = []
//     for (let i = a; i <= b; i++) {
//         if(i % 2 !== 0){
//             arr.push(i)
//         }
//     }
//     return arr
// }

// console.log(getOddArray(15,25))

let arr = [1, 4, 67, 123, 55, 10, 11, 1000]

// let maxValue = (a) => {
//     a.sort((a, b) => {
//         if (a > b) return -1
//         if (a < b) return 1
//     })
//     return arr[0]
// }
// console.log(maxValue(arr))


let maxValue = (a) => {
    return Math.max.apply(null, a);   
}
console.log(maxValue(arr))






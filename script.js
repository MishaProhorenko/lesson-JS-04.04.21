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

// let arr = [1, 4, 67, 123, 55, 10, 11, 1000]

// let maxValue = (a) => {
//     a.sort((a, b) => {
//         if (a > b) return -1
//         if (a < b) return 1
//     })
//     return arr[0]
// }
// console.log(maxValue(arr))


// let maxValue = (a) => {
//     return Math.max(...a);   
// }
// console.log(maxValue(arr))


// let deleteElement = (a, b) => {
//     // return a.slice(0, -b)
//     return a.splice(0, a.length - b)
// }

// console.log(deleteElement(arr, 3))


// let str = 'Hello world'


// let reverse = (a) => {
//     let result = a.split('').reverse().join('')
//     return result
// }
// console.log(reverse(str))


let arraySemicopyChecker = (firstArray, secondArray) => {
    if (firstArray.length < secondArray.length) {
        const filteredArray = firstArray.filter(item => secondArray.includes(item));
        return firstArray.length === filteredArray.length
    } else {
        const filteredArr = secondArray.filter(item => firstArray.includes(item));
        return firstArray.length === filteredArr.length
    }
}


console.log(arraySemicopyChecker([1, 2, 3], [1, 3, 4, 5]))
console.log(arraySemicopyChecker([12, 3, 3, 3, 4, 5], [12, 3, 4, 5, 6, 73, 3]));



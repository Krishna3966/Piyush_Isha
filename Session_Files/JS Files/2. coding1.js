//Coding puzzle 1 - You have to swap two numbers. 

let a = 10
let b = 20

//At the end of this programme, a should be 20, b should be 10

// let temp = a
// a = b
// b = temp

a = a + b
b = a - b
a = a - b

console.log({a, b})

//You are not allowed to use a temporary variable. 


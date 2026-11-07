
//Type conversion 
//Here you explicitly change a value from one data type to another.
//Here, JavaScript is not deciding for you. You do it yourself.

//string --> number
let num = "123"     //string
let converted = Number(num)     //Here, I am explicitly converting to number. 
console.log(converted, typeof converted)

//number --> string
let n = 456
let str = String(n)             //Here I am explicitly converting to string.
console.log(str, typeof str)

//The key point is you are in control.

//Type coercion/Automatic Type Conversion
//Here, JavaScript automatically changes the data type in the background when it needs to.
//You don't ask for it. JavaScript does it automatically to make things work.

console.log("5" + 2)        //"52"

console.log("5" - "2")      //5 - 2 = 3
console.log("5" - 2)      //5 - 2 = 3

//Key point is JavaScript decides for you automatically.

console.log("I am " + 23 + " years old")
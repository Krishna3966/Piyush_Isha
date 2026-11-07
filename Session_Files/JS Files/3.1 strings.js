//String template literals
//Using this concept, you can write the strings in a more natural way. 
//Template literals are those strings that allow embedded expressions
//which will be evaluated and then turned into a resulting string. 

//f-strings(Python)

const firstName = 'Piyush'
const job = 'Trainer'
const birthYear = 1991
const year = 2030

//I'm Piyush ,a 39 years old Trainer!

//Java's style
const str1 = "I'm " + firstName + " ,a " + (year - birthYear) + ' years old ' + job + "!"
console.log(str1)

const str2 = `I'm ${firstName} ,a ${year - birthYear} years old ${job}!`
console.log(str2)

console.log(`I counted ${3 + 4} sheep`)

"Piy'ush"

'Hel"lo'

// "Hel"lo"

// 'Hel'lo'

//Using backticks, we can easily create multi-line strings also. 

// console.log('This is a 
//     multi-line string.')

console.log(`This is a 
    multi-line 
    string.`)

//null
//undefined

//null - Intentional absence of any value. This is explicit. It must be assigned.

//undefined - Any variable that does not have an initial value is automatically undefined.
//It is implicit(Automatic)

//A variable can never be NULL on its own. I have to explicitly give this NULL value. 
let loggedInUser 

console.log(loggedInUser)

//Random number generation
//Email - piyush12345@gmail.com

const PI = 3.1416
console.log(Math.PI)

console.log(Math.round(4.999))  //5
console.log(Math.round(4.3333))  //4

console.log(Math.pow(4, 3))     //4 raise to the power 3
console.log(4 ** 3)

//Floor means chop the decimal part entirely.
console.log(Math.floor(3.99999))    //3
console.log(Math.floor(3.11111))    //3

//Generate a random number between 1 and 10. 

//Math.random() - It always generates a fractional value between 0 and 1.
//You will never get the output as 1, but in very, very rare cases you might get 0. 
//The maximum possible value is 0.9999999

//This equation will give me the output between 0 and 9 and not 1 and 10. 
Math.floor(Math.random() * 10) + 1


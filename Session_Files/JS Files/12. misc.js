/*
Modern JS features - ES2015/ES6

Arrow functions
String template literals 
let & const
for..of
for..in
String includes()
Array includes()
Spread operator
Destructuring syntax - Array and objects
Default function parameters 
Classes and Objects
Async

*/

const { create } = require("node:domain")

//1. Default Parameters

function greet(name){
    console.log(`Hello ${name}`)
}

greet("Murali")     //In this case, the default value would be ignored. 
greet("Deven")
greet(null)     //name -> undefined

//Instead, we may want JavaScript to use a backup value whenever the user does not provide an argument.

function greet(name = "Guest"){
    console.log(`Hello ${name}`)
}

function createUser(name, city = "Delhi") {
    console.log(name, city);
}

createUser("Piyush")

//When is the default value actually used?
//the default value is used only when no argument is passed or undefined is passed

//All the default parameters need to come at the end of the parameter list

function greet(name, message = "Welcome"){
    console.log(`${message} ${name}`)
}

greet("Piyush")

// function greet(message = "Welcome", name){
//     console.log(`${message} ${name}`)
// }

//greet(undefined, "Piyush")

//Spread operator(...)
const nums = [1, 2, 3]

//With the spread operator, JavaScript treats it as three separate values. 
console.log(...nums)    //The array is expanded into individual values. 

const frontEnd = ["HTML", "CSS"]
const backEnd = ["Node.js", "Express"]

//My requirement is to combine the two arrays and create a fresh array.
const fullStack = [...frontEnd, ...backEnd]     //          ["HTML", "CSS", "Node.js", "Express"]

//A very common use case of the spread operator is to create a copy of an array.

const numbers = [10, 20, 30]
//const copy = numbers        //Here I am creating a second pointer to the same array. 

const copy = [...numbers]

console.log(copy)
console.log(copy === numbers)

//Destructuring Syntax
//It's a very short, clean syntax to unpack
//1. values from arrays
//2. properties from objects
// 
// into distinct variables.

const colors = ['red', 'green', 'blue']

// const first = colors[0]
// const second = colors[1]
// const third = colors[2]

//This works, but I have to write three separate lines of code.

const [first, , third] = colors

console.log(first, third)

//Object Destructuring

const user = {
    name: 'John Doe',
    age: 26,
    city: 'Dallas'
}

// const name = user.name
// const age = user.age
// const city = user.city

const {age, name, city} = user

console.log(name, age, city)

//Rename while destructuring

const browser = 'firefox'

const config = {
    timeout: 5000,
    retries: 2,
    browser: 'chromium'
}

// const browser = config.browser
const {browser: browser1} = config      //Taking the help of browser key, I am creating a constant called browser1. 
console.log(browser1)

//Nested destructuring.
const results = [
    {
        first: "Eliud",
        last: "Kipchoge",
        country: "Kenya",
    },
    {
        first: 'Feyisa',
        last: 'Lilesa',
        country: 'Ethiopia'
    },
    {
        first: 'Galen',
        last: 'Rupp',
        country: 'United States'
    }
]

//results[1].country

const [, ,{country}] = results
console.log(country)


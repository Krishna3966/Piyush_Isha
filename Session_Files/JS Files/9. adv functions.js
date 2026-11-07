
//Function Scope
//Scope means visibility. 

//Variable visibility means the location where a variable is
//defined dictates where we have access to that variable. 

function helpMe(){
    //It's a local variable. 
    let msg = "I am on fire"
}

helpMe()
console.log(msg)        //ReferenceError: msg is not defined

//Inside this function, I have created three local variables.
//In the case of a function var variable behaves normally 
function lol(){
    let person = 'Tom'
    const age = 45
    var color = 'Teal'
}

lol()
// console.log(person)         //Hard Stop. As soon as JavaScript sees the first error, it will simply stop, and the rest of the code will never execute. 
// console.log(age)
console.log(color)

//We can have multiple functions with the same variable.
function lol1(){
    let person = 'Aman'
    const age = 34
    var color = 'blue'
}


var count = 5
var count = 6     //SyntaxError: Identifier 'count' has already been declared

console.log(count)

//Reasons for not using the `var` keyword
//1. Re-declaration is allowed with the `var` keyword, but strictly not allowed with `let` and `const`.

let bird = 'mandarin duck'      //This bird has a file-level scope. 

function birdWatch(){
    let bird = 'Golden season'  //This bird is a local variable. It has a local scope. 
    console.log(bird)
}

birdWatch()
console.log(bird)

//Block scope

let radius = 10

//if condition is a block
if(radius > 0){
    const PI = 3.14
    let circ = 2 * PI * radius
}

console.log(radius)
// console.log(PI)     //ReferenceError: PI is not defined
console.log(circ)

if(true){
    var animal = 'eel'
}

console.log(animal)

//Reasons for not using the `var` keyword
//1. Re-declaration is allowed with the `var` keyword, but strictly not allowed with `let` and `const`.
//2. There is no block scope for the var variable. 

//if, for loop, while, for..of, for..in

//Function expression
//It is simply another way or another style of creating a function.

//In JavaScript, we have two styles. 
//1. Function Declaration
//2. Function Expression 

//In the function expression style, the function itself doesn't have any name.

//If you don't have a function name, it is called an anonymous function. 
const add = function (x, y){
    return x + y
}

console.log(add(4, 5))

add = 4
console.log(add)

//Callback Function
//A callback function is a function passed into another function
//as an argument, which is then invoked inside the outer function.

function callTwice(func){
    func()
    func()
    func()
    func()
}

function laugh(){
    console.log("HHHHHHHHHHHAAAAAAAA")
}

//Here, `laugh` is the callback function.
//In the case of callback functions, we never use parentheses.  
callTwice(laugh)

function greet(){
    console.log("Good Evening")
}

function displayMessage(){
    console.log("Welcome to Javascript")
}

greet()
displayMessage()

//Functions are treated like values. 
sum(10, 20)
print("Piyush")


function greet(callback){
    console.log("Good Evening")
    callback()
}

function displayMessage(){
    console.log("Welcome to Javascript")
}

//displayMessage -> Callback function
greet(displayMessage)
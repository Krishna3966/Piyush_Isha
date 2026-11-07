/*

Suppose I want to calculate the square of numbers. 



*/

let number1 = 4
let square1 = number1 ** 2
console.log(square1)

let number2 = 6
let square2 = number2 ** 2
console.log(square2)

let number3 = 8
let square3 = number3 ** 2
console.log(square3)


//There is a lot of repetition here.
//Too much of typing
//Hard to maintain

function getSquare(number) {
    let square = number ** 2
    console.log(square)
}

getSquare(4)
getSquare(6)
getSquare(8)

//A function is a reusable block of code. We write a logic once, and then we can use it n number of times.

console.log("Welcome to Playwright class")
console.log("Welcome to Playwright class")
console.log("Welcome to Playwright class")
console.log("Welcome to Playwright class")

//The problem is the same message I am repeating again and again. 
//What if I want to change this message later? It means I have to update the same message at every place.

function welcomeMessage(){
    console.log("Welcome to Playwright class")
}

welcomeMessage()
welcomeMessage()
welcomeMessage()
welcomeMessage()

//A function helps us avoid repetition and reuse the code.

//Functions allow us to write reusable and modular code.
//We define a chunk of code that we can then execute at a later point.

//It is a two-step process.
//Define        --->        Run it

console.log("hello".toUpperCase)       //This is an example of a built-in function.

//built-in function
//Custom/user defined function

//Whenever you're calling a function, make sure you are writing parentheses.

/*
function funcName(){
    //function body
}

*/

function grumpus(){
    console.log("This is line#1")
    console.log("This is line#2")
    console.log("This is line#3")
}

grumpus()

//Parameters vs Arguments

//Tim and Neha are arguments. They are also called inputs. 


avg(20, 25)
avg(2, 4, 6, 8)

"hello".toUpperCase()       //No arguments
"hello".indexOf("h")        //1 argument/1 input

//Function definition
//Function parameters are always in the definition. 
function greet(person){         //person is the parameter
    console.log(`Hi, ${person}`)
}

//Function arguments are always when you are calling the function. 
greet("Tim")            //Tim and Neha are arguments. 
greet("Neha")

//Functions with multiple arguments
function square(num){
    console.log(num * num)
}

function multiply(a, b){
    console.log(a * b)      //I'm just calculating the square and I'm simply printing this value. 
}

multiply(4, 5)

//The Return Statement 
//Every built-in function returns something when I call it.
//The return statement ends the function execution and
//specifies the value to be returned by that function.

"Hi There".toUpperCase()
console.log(upper)

function square(num){
    return num * num
    return "Hi"
    console.log("Hello")
}

const result = square(4)

console.log(result)

//We can definitely have multiple return statements inside a function,
//but only one would be executed. 
function isPurple(color){
    if(color === 'purple'){
        return true
    } else {
        return false
    }
}
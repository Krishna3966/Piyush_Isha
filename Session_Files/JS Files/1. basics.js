
//Javascript Datatypes


/*
What kind of information can a programme store? 

- A person's name   "Piyush"
- A person's age    25
- Whether a student passed or failed true

JavaScript needs a way to distinguish between these different types of values. 
Reason: that is a reason we need data types. 

A data type simply tells JavaScript what kind of data a value represents.

let name = "Piyush"

let age = 35

let passed = true

1. number
2. string
3. boolean
4. null
5. undefined

symbol and bigint

What are primitive data types? 
Primitive means something simple, basic, or fundamental. 

Primitive data types represent a single and simple value. 

let student = {
    name: "Rahul",
    age: 20
}

Primitive = One simple value 
Non-primitive = A collection of values or a more complex structure 

Examples of primitives
"Hello"     Text
42          number
true        boolean
undefined
null
*/

//1. number
//JavaScript has one data type called number. 
// JavaScript does not have separate data types for integers and decimal numbers. 

100
3.4545  //float or decimal
    - 354

"100"   //-> It is a string

//We use numbers to store any numeric values. 
// - Age
// - Salary
// - A product price
// - Temperature
// - Quantity

//Precision
//Precision simply means how many digits we can store after the decimal point. 

let price = 99.99

let age = 30

//int number = 100

//Modulus/Remainder operator - %
console.log(27 % 2)

//Spacings do not matter in JavaScript. 
4/2+34/4
4 / 2 + 34 / 4

//Powers
4 * 4 * 4

//** is called as Exponentiation operator
console.log(4 ** 3)
console.log(5 ** 2)

//NaN and Infinity
//Not a number.

//JavaScript is case-sensitive.
//NaN is represented like an error in JavaScript, but surprisingly it comes under number.

//Variable Declaration
//I am creating a brand new memory location and storing some value inside this. 

//Syntax - 
//let someName = someValue

//let count means I am creating a new memory location.
//I am giving this memory location a name called count. 
//variable declaration
//Value assignment
let count = 1       //Assignment operator works from right to left. 

// count + 1           //I'm simply adding one to count, but not updating the memory location. 

//Add the value of 1 to count and also update the memory location. 
count = count + 1   //= is the assignment operator

console.log(count + 1)

//int number = 1;

let count = 1 

count = count + 1       //Now count is 2

//Take the value of count memory location, which is 1, add 1 to it,
//which is 2, and put this 2 back into count. 
count += 1      //Short way of writing rhe same thing

count++         //Whatever is the current value, just add one and put it back. 

console.log(count)

//count += 1

//count++    Here I don't have a choice. Whatever is the current value, it will increment by 1 only. 

//Introducing const
const birthYear = 2005      //The memory location value cannot change once fixed. 

// birthYear = 2006

console.log(birthYear)

const pi = 3.1416

const daysInWeek = 7

//Lower camel casing
//days  in  week
//If I am joining multiple words together, the first character of the
// first word stays lower case, but all the subsequent words' first character will be upper case.

//days_in_week

//var
//Before let and const were introduced in 2015, var was the only way of declaring variables.
//Where is the legacy way of creating a variable.

//ES2015 - In the year 2015, there was a very, very major change that happened in JavaScript. 
//Let and const were introduced. 
//Classes and objects were also introduced in 2015 only. 

//ES6 This is the unofficial version. 

let windSpeed = 76
windSpeed += 5
windSpeed--

console.log(windSpeed)

//Underscore is only for readability. 
let num = 1_000_000_000_000

console.log(num)

let creditCard = 1234_5678_9012_3456;

/*
Variable Naming Rules 
1. Variable names cannot start with a number. Example - 3years
2. Variable names can only contain letters, numbers, an underscore, or a dollar sign.
3. We can not use reserved JavaScript keywords as variable names. For example - let,
new, function, break
4. Never use an uppercase letter for creating a variable. Always use lower camel casing.
5. Make sure the variable names are descriptive. 
*/
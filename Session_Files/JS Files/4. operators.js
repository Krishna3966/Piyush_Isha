//Controlling the programme logic and flow

//Comparison Operators 
/*
>
<
>=
<=
==      Lose equality(Never use it.)
===     Strict equality. 
!=      Lose Inequality(Never use it.)
!==     Strict Inequality 

*/

//All these comparison operators return a Boolean value. 

console.log("hello".length >= "hello!".length)      //5 >= 6

//Difference between loose and strict equality
//Lose equality checks for equality of value but not equality of datatype.
//It coerces both the values to the same type and then it compares them. This can lead to unexpected results. 

console.log(4 == '4')   //'4' == '4'        Automatic type conversion is happening. 
console.log(4 === '4')  //No type conversion is happening here.

console.log(10 != '10')     //'10' != '10'
console.log(10 !== '10')    //Compare them exactly as it is, without any type conversion. 

console.log("hello".length == "4")

//Truthy & Falsy values

if(true){
    console.log("Inside if block")
}

//100 -> boolean
if(100){
    console.log("Inside if block")
}

//"Hello" -> boolean
if("Hello"){
    console.log("Inside if block")
}

//The answer is JavaScript automatically converts values into either true or false when evaluating a condition. 

//A truthy value is any value that JavaScript treats as true inside a condition.
//100, -5, 3.3434, "hello", "TCS"

//There are a total of 6 falsy values in JavaScript. 
//Other than these 6 false values, everything else is a truthy value!

/*
0       //Except the number zero, every other number is a truthy value. 
false
""      //Only an empty string is a falsy value. All other strings are truthy values. 
null
undefined
NaN - Not a number. 
*/

let mystery = 5     //--> true

if(5){
    console.log("TRUTHY")
} else {
    console.log("FALSY")
}

let loggedInUser = ""     //--> false

if(loggedInUser){
    console.log("TRUTHY")
} else {
    console.log("FALSY")
}

//Piyush Gupta

//Logical Operators
//AND, OR, NOT
//This is used for combining multiple conditions. 

//AND - &&
//OR - ||
//NOT - !

//1. AND - &&
//Both the sides need to be true in order for the whole thing to be true.

console.log(1 <= 4 && 'a' === 'a')      //true
console.log(9 > 10 && 9 >= 9)       //false

/*
true && true -> true
true && false -> false
false && true -> false
false && false -> false
*/

//2. OR - ||
//Either of the sides need to be true in order for the whole thing to be true.

console.log(1 <= 4 || 'a' === 'a')      //true
console.log(9 > 10 || 9 >= 9)       //true

//The OR operator returns true if at least one condition is true.
/*
true || true -> true
true || false -> true
false || true -> true
false || false -> false
*/

//NOT operator - !
//It simply reverses a Boolean value. 

console.log(!null)      //!false -> true
console.log(!(0 === 0)) //false
console.log(!(3 <= 4))  //false

//Operator Precedence
//This is simply the set of rules that tells JavaScript which operator
//should be evaluated first when an expression contains multiple operators. 

console.log(2 + (3 * 4))

//First, JavaScript will perform the comparison operations. 
console.log((10 > 5) && (20 > 10))

//! has the highest precedence amongst && and ||
//&& Has a higher precedence than ||
//!     >       &&      > ||

//But you can alter this using parens

//Short Circuiting
//AND - &&
//OR - ||

//OR - If the left side is true, JavaScript will never
//execute the right-hand side. It short circuits. 
let x = 7

console.log(x === 7 || x === 3)

//AND - If the left side is false, JavaScript will never
//execute the right-hand side. It short circuits.

let x = 5

console.log(x === 7 && x === 3)

//Ternary operator
//Unary - 1     a++ or ++a
//Binary - 2    a + b
//Ternary - 3

//Ternary operator has three pieces. 
//Syntax - 
//condition ? expIfTrue : expIfFalse

let num = 2

if(num === 7){
    console.log("Lucky")
} else {
    console.log("BAD")
}

//Above, we are writing five lines of code. 
//Using the ternary operator, we can write this entire if-else condition into a single liner. 

num === 7 ? console.log("Lucky") : console.log("BAD")

let status = 'offline'

let color               //If I don't give an initial value, it will automatically be undefined. 

// if(status === 'offline'){
//     color = 'red'
// } else {
//     color = 'green'
// }

//condition ? expIfTrue : expIfFalse
// status === 'offline' ? color = 'red' : color = 'green'

color = (status === 'offline' ? 'red' : 'green')


console.log(color)

//On a Mac machine, press Command-Control-Space. 
//On a Windows machine, press Windows and dot. 

//❌
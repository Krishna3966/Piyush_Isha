/*
So far, we have stored a single value inside a variable, for example 

let name = "Piyush"

Here, the variable name stores only one value.

Now imagine you are building an automation script. You have to
store the names of 100 students.

let student1 = "Rahul"
let student2 = "Rajeev"
let student3 = "Charlie"
let student4 = "Raksha"
....
....
let student100 = "Nick"

This is very difficult to write and even hard to maintain. 

So JavaScript gives us a much better solution called an array.

Array is simply a variable or a container that can store multiple values together. 

*/

let students = ["Rahul", "Rajeev", "Charlie", "Raksha", ,,,,,,,,,,"Nick"]

//Array is an `ordered` `collection` of `related` values. 

//List of comments on an Instagram post 
//Collection of levels in a game 
//Songs in a playlist 

let students = []           //Empty array

//Array of strings
let colors = ["red", "orange", "yellow"]

//Array of numbers 
let lottoNumbers = [12, 23, 434, 233]
lottoNumbers.at(0)

//Mixed Array ❌
let stuff = [true, 67, 'cat', null]     //This is an example where I should not use an array. Why? No relation in data

/*
Arrays and strings are very, very much similar.
1. Both the strings and arrays are indexed.

2. Both strings and arrays have a single property called `length`.

3. Both strings and arrays will give `undefined` if you try to 
access an index that is not present.

4. Both strings and arrays have an `at` method which can be
used to find out the value at a particular index.

Differences between array and string
Strings are immutable while arrays are mutable. 
*/

let name1 = "Ankit"
name1 = "Piyush"
name1.at(0)

let colors = ["red", "orange", "yellow"]

console.log(colors.length)      //3

console.log(colors[0])
console.log(colors.at(0))
console.log(colors.at(-1))      //at method supports negative indexes also.

console.log(colors[colors.length - 1])
console.log(colors[3])

//Modify arrays
let colors = ["rad", "orange", "green", "yellow"]

colors[0] = 'red'       //Arrays are mutable.
//colors.at(2) = 'yellow'      //["red", "orange", "yellow", "yellow"]
colors[2] = 'yellow'      //["red", "orange", "yellow", "yellow"]
//colors.at(3) = "green"       //["red", "orange", "yellow", "green"]
colors[3] = "green"       //["red", "orange", "yellow", "green"]

console.log(colors.at(4))
colors[4] = "blue"      //Here, I am increasing the area size and I am putting the value at the last index. 

//push, pop, unshift, shift
//Push and Unshift are for adding. 

//Pop and shift are for removing. 

//push() - We can add one or more elements on the RHS/end of the array. 
//pop() - It removes exactly one element from the RHS/end of the array. 

//unshift() - We can add one or more elements on the LHS/beginning of the array. 
//shift() - It removes exactly one element from the LHS/beginning of the array.

let colors = ["red", "orange", "green", "yellow"]

colors.push("black")            //["red", "orange", "green", "yellow", "black"]
colors.push("cyan", "purple")   //["red", "orange", "green", "yellow", "black", "cyan", "purple"]
colors.shift()
colors.pop()                    //["orange", "green", "yellow", "black", "cyan"]
colors.push("maroon")           //["orange", "green", "yellow", "black", "cyan", "maroon"]
colors.unshift("white", "magenta")  //["white", "magenta", "orange", "green", "yellow", "black", "cyan", "maroon"]
colors.unshift("black")             //["black", "white", "magenta", "orange", "green", "yellow", "black", "cyan", "maroon"]

console.log(colors)

//More array methods
//includes() - Search for any value inside an array. Boolean
//indexOf() - Where is the value present? Give me the index
//join() - It joins all the array elements together and makes one string.
//reverse() - It simply reverses an array. It modifies the same array. 
//slice() - It is used to create a copy of an array. Alternative is apread operator

//1. includes() - Search for any value inside an array. Boolean

let array1 = [1, 2, 3]

//My requirement is I want to find if the number 2 is present in this array or not.
console.log(array1.includes(2))     //true
console.log(array1.indexOf(2))     //1

let pets = ['cat', 'dog', 'bat']
console.log(pets.includes('cat'))       //true
console.log(pets.includes('at'))        //false. It looks for an exact match. 

//Tell me, where is the dog present in this array
console.log(pets.indexOf('dog'))        //1
console.log(pets.indexOf('tiger'))        //-1

//reverse() - It simply reverses an array. It modifies/alters the same array. 
let array2 = ['one', 'two', 'three']
array2.reverse()        
console.log(array2)     //[ 'three', 'two', 'one' ]

//join() - It joins all the array elements together and makes one string.
//This is the exact opposite of split method.
//If I don't pass a separator, a comma is used automatically. 

const elements = ['Fire', 'Air', 'water']
console.log(elements.join())        //Fire,Air,water
console.log(elements.join(""))        //FireAirwater
console.log(elements.join("-"))        //FireAirwater

//slice() - It is used to create a copy of an array. Alternative is apread operator
//I simply preserve the original array and create a brand new copy. 
const elements = ['Fire', 'Air', 'water']       //777

//Suppose my requirement is to reverse the array, but I want to retain the original copy. 
// const final = elements.slice().reverse()        //888

console.log(elements.slice(0))      //Create a full copy. 888 
console.log(elements.slice())      //Create a full copy. 
console.log(elements.slice(1))
console.log(elements.slice(1, 3))

//Introduction to reference types
let fruit = "orange"
let color = fruit       //Create a copy of fruit memory location and put it into colour. 

//################### Primitive Types #######################
//Here, we just compare the values. We don't compare the memory addresses. 
//################### Primitive Types #######################

console.log(color === fruit)        //Here I am comparing just the values and not comparing the memory address.

fruit = "watermelon"        //I'm changing the value of fruit memory location from orange to watermelon. 

console.log(color === fruit)    //"watermelon" is NOT SAME as "orange". false

//Reference types
//arr1 and arr2 are just pointers in the `Stack` memory.
//The actual arrays are stored in the `heap` memory. 

let arr1 = [1, 2, 3]        //777
let arr2 = [1, 2, 3]        //888
let arr3 = arr1             //Here I am creating a second pointer to the same array. 

//################### Reference Types #######################
//Here, we just compare the memory addresses. We don't compare the values. 
//################### Reference Types #######################
console.log(arr1 === arr2)      //777 === 888. False

console.log(arr1 === arr3)      //777 === 777 true

//The array [1, 2, 3] Has two pointers now arr1 and arr2.
//I can use any of these pointers to access or modify this array

arr1.push(4)        //Using the first pointer, I'm pushing or adding a new value. 
arr3.reverse()      //Using the second pointer, I am reversing the array. 
console.log(arr3)
console.log(arr1)

//Use const with arrays
let myEggs = [1, 2, 3]      //let means this pointer is variable
myEggs = [4, 5, 6]

console.log(myEggs)

const myEggs = [1, 2, 3]        //Const means this pointer is fixed. 
myEggs.push(4)

console.log(myEggs)

myEggs = [7, 8, 9]

const count = 1
count = 2

/*
Stack = It's a place where variables/primitive values live. 
number, string, boolean
Stack works with copies. 

Heap = It is a place where objects and areas live. 
Heap stores complex data like objects, arrays, even functions. 

let a = [1, 2, 3]
let b = a       //Both A and B have the same memory address. 
*/
//Boolean
//Boolean is simply true or false(Yes/No.. 1 or 0). 

let isLoggedIn = true
const isWaterWet = true

//Unfortunately, variables can change their data types in Javascript.
//This is strictly not allowed in Java. 
let numOfDonuts = 12        //It's a number. 
numOfDonuts = false         //Now it's no longer a number. It's a Boolean.
numOfDonuts = "Hello"

//This concept is called dynamic typing. 

//TypeScript has stricter rules, and one of those rules is that variables cannot change their data type.

//Strings
//I want to store a person's name, city, email address, or a product name. 

let name = "Piyush"
let message = "Welcome to JavaScript!"

//Strings are pieces of text or a group of characters joined together.
//In order to create a string, I can use either single quote or double quote or back tick(`)


let msg = 'Welcome to JavaScript'
let animal = `Tiger`

//typeof is an operator. 

console.log(typeof "87")

let firstName = "Ziggy"
let lastName = "Canary"

//Strings are immutable. Once I create any string in the memory, I cannot modify it.
//A brand new string gets created in the memory. 
console.log(firstName + lastName)   //GC will happen

let finalString = firstName + lastName  //GC will NOT happen

//1 + 2         //Here, + is an addition operator. 
//"a" + "b"     //Here, + is a concatenation operator. 

let number = 10
number = 15

//Garbage Collection

//All the variables stay in the memory while the programme is running. 
//Once the programme finishes, all the variables, all the memory locations, are simply destroyed.

//Strings are indexed.
//Each character has a corresponding index.

//C H   I   C   K   E   N
//0 1   2   3   4   5   6(7 - 1)

//3 people - Deven(1), Gary(2), Jhansi(3)

//Deven(0), Gary(1), Jhansi(2)

//Every string has a property called length. Spaces do matter. 

//Intellisense
//Blue color -> Property
//Purple color -> actions

//Properties - As a human, I may have hair colour, I may have eye colour, I may have my skin colour.

//Methods - As a human, I can take some actions. I can walk. I can talk. I can eat. I can exercise. 

console.log(" Piyush ".length)

console.log("Hello World".length)

const mySong = "Surfing USA"
console.log(mySong[6])

//String methods
//I may want to capitalize a string
//I will remove these unwanted spaces.
//I can search within a stream. 
//Replace parts of a string

//Strings are immutable. 

//Strings come with a set of `built-in` methods, which are the actions that can be performed on that particular string.

//Syntax  - 
//string.someMethodName()

let msg = "you are so grounded"

//msg.toUpperCase()       //I am creating a brand new string in the memory. GC
msg = msg.toUpperCase()       //I am creating a brand new string in the memory. GC

console.log(msg)

//trim()
//It simply removes the starting and ending white spaces inside a structure. 

let greeting = "     leave me alone plaz     ".trim()

console.log(greeting)

//Method chaining
let color = "   purple     "

//I want to remove the spaces, plus I want to capitalize. 
// color = color.trim()
// color = color.toUpperCase()

//"   purple     "
//"purple"
//"PURPLE"
color = color.trim().toUpperCase()

console.log(color.trim)

let tvShow = 'baseball'

//1. I want to find out if I have a character called b which
//is present inside this string or not. includes() - boolean
//2. Where is the b character present?  indexOf()  - number

console.log(tvShow.includes('b'))
console.log(tvShow.includes('ball'))
console.log(tvShow.includes('x'))

console.log(tvShow.indexOf('s'))
console.log(tvShow.indexOf('x'))        //Tell me the index of character x inside the string. 

console.log(tvShow.indexOf('ball'))        //Tell me the index of character x inside the string. 
console.log(tvShow.indexOf('b'))  

console.log("Baseball".indexOf("ball"))     //4
console.log("baseball".indexOf("b"))     //
console.log("Baseball".indexOf("entertaining"))

//slice()
//It slices an existing string and gives you a piece of it. 
//The starting index is included. 
//The ending index is excluded. 

let str = "this is a super long string"


console.log(str.slice(10, 14))  //It will slice from 10 all the way till 13. 
console.log(str.slice(10, 14))  //It will slice from 10 all the way till 14. 

console.log("Baseball".slice(4))    //Start from 4 and go all the way till the ending index.

//replace(ReplaceWhat, replaceWith)
//It replaces the first occurrence.

console.log('baseball is entertaining'.replace('entertaining', 'ok'))

console.log('ha ha ha'.replace('ha', 'heee'))
console.log('ha ha ha'.replaceAll('ha', 'heee'))

//split()
//The split method is used to break a string into smaller
//pieces and put those pieces into an array. 

let text = "Hello World"
let words = text.split(" ")
console.log(words)          //[ 'Hello', 'World' ]

let fruits = "apple,banana,grapes"
console.log(fruits.split(","))

console.log("Javascript".split(""))         //"" Is called an empty string/nothing

let song = "london calling"
song.toUpperCase()      //I am creating a new string but doing nothing with it, so this is useless. 

console.log(song)

let park = 'Yellowstone'
const index = park.indexOf('Stone')

//JavaScript is case sensitive. 

console.log(index)

let yell = 'GO AWAY!!'
console.log(yell.indexOf('!'))

//In the case of method chaining, always go from left to right. 
console.log('GARBAGE'.slice(2).replace("B", ""))

//'GARBAGE'.slice(2)    -> RBAGE.replace("B", "")


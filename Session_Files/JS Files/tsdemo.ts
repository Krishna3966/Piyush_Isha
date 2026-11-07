
// This is how we create variables in TypeScript. 
// let myVar: datatype = someValue

//String fullName = "Piyush";
let fullName: string =  "Piyush Gupta"
fullName = 100

fullName = "Amit Mishra"

//int myNumber = 100;
let myNumber: number = 100
myNumber = true
// myNumber = 14

console.log(myNumber)

//Type inference
//Type inference refers to the TypeScript compiler's ability to
//infer the data types from certain values in your code.

//TypeScript will enforce this type moving forward. 
let x = 27

x = "hello"
x = true
x = 34

//The any type
//This is unique to TypeScript and does not exist in JavaScript.

//This turns off the type checking for this specific variable, and
//in simple words, it is like defeating the purpose of using type checking. 
let myData: any = "This is my data"

myData = 87
myData = "abc"
myData = true

//Delayed initialization in TypeScript
//Normally, when you declare a variable in TypeScript, you give a value right away.

let count1: number = 5      //I am initializing it immediately.

//Sometimes you don't know the value at the time of declaration. This is called delayed initialization.

let name1: string           //I'm only declaring but not initializing.  
name1 = "Piyush"            //Now I'm initializing. 

console.log(name1)

//Delayed initialization means I will tell you the data type now, but give the value only later.

//Implicit any
//TypeScript tries to guess the data type of a variable.
//If you don't give a data type or an initial value, TypeScript will say,
// "I don't know the data type," so I will assume it will be any.

//In this example, we are losing TypeScript's main benefit, so be very careful with this.
let data            //No datatype, no value
data = 5
data = "hello"
data = true

//Here, the data type of the data variable is any, which has turned off the type checking.

//Functions in TypeScript

function greet(){
    console.log("Hello. Welcome to typescript")
}

greet()

//Function with parameters
function greetUser(name: string){
    console.log("hello " + name)
}

greetUser("Piyush")
greetUser()

//public int a(int a, int b)

function add(a: number, b: number): number{
    return a + b
}

let result = add(5, 10)

console.log(result)

//Default Parameters
//We can also give default values to parameters.

function greetUserDefault(name: string = "Guest"){
    console.log("hello " + name)
}

greetUserDefault()
greetUserDefault("Neha")

//Optional Parameters
//Sometimes parameters may not always be provided. In that case,
//we can use ? to mark them as optional.

function printMessage(msg?: string): void{
    if(msg){
        console.log("Message", msg)
    } else {
        console.log("No message provided")
    }
}

printMessage("Hello")
printMessage()

//The void type

//Type Alias in TS

function printName(name: {first: string, last: string}){
    console.log(`${name.first} ${name.last}`)
}

function greetPerson(person: {first: string, last: string}){
    console.log(`Hello ${person.first}`)
}

//The problem in the above two functions is that I have to repeat this
// {first: string, last: string}
//in both the functions, which is very difficult to read. 

printName({first: "Piyush", last: "Gupta"})

//The solution is type alias.

type Name = {
    first: string,
    last: string
}

function printName1(name: Name){
    console.log(`${name.first} ${name.last}`)
}

function greetPerson1(person: Name){
    console.log(`Hello ${person.first}`)
}

printName1({first: "Piyush", last: "Gupta"})
greetPerson1({first: "Piyush", last: "Gupta"})

type ID = string | number

// let userId: string | number     //userId can be either a string or a number
let userId: ID

userId = 101
userId = "12345"

//Optional Properties
//Sometimes an object may or may not contain a property. 
//TypeScript allows this by using ? symbol.

type Person = {
    first: string,
    last?: string
}

//Now every object must contain both properties.

//The object `p1` can only contain `first` and `last` properties and nothing else. 
const p1: Person = {
    first: "Rahul",
    //last: "Sharma",
    // age: 30
}

//The readonly modifier 
//Sometimes we want a property that can be set once but cannot be changed later, so TypeScript provides the `readonly` modifier for this.

type Student = {
    name: string,
    readonly rollNo: number
}

const s1: Student = {
    name: "Raj",
    rollNo: 101
}

s1.rollNo = 200     //This works because the property is mutable. 

//Read-only properties cannot be modified after creation.
//They can be assigned once but cannot be changed later on. 

type Account = {
    readonly accountNumber: number,
    holderName: string,
    balance: number
}

const acc1: Account = {
    accountNumber: 12345,
    holderName: "Rehan",
    balance: 5000
}

//Interfaces

/*
Samsung can add its S Pen support. 
Apple may add some Apple-specific feature.
OnePlus may add an alert slider.

An interface is like a standard specification or a contract. 

It says if you want to become a smartphone object, you need to have at least these properties. 

An interface helps define a common contract.
*/

interface Smartphone {
    brand: string,
    model: string,
    ram: number,
    storage: number
}

const samsung: Smartphone = {
    brand: "Samsung",
    model: "S25",
    ram: 12,
    storage: 256
}

//Types vs interfaces

// type Account = {
//     readonly accountNumber: number,
//     holderName: string,
//     balance: number
// }

/*
A type is much more flexible.
For an online shopping website, sometimes a coupon code can either be a
number (12345), or it can be a string like "SAVE20".

Both are valid. 
In order to describe this, a type alias is a very useful option. 

*/

type Coupon = string | number

let code: Coupon

code = "SAVE20"
code = 12345

//An interface cannot directly represent that a value can either be a string or a number, but a type alias can.
//And this is one of the biggest strengths of the Type keyword.

/*
Suppose a payment on an e-commerce website can happen in three different ways:
cash, card, and UPI. 

Using a type alias, we can write this very easily. 

*/

type PaymentMethod = "Cash" | "Card" | "UPI"

//Now TypeScript will only allow these three values, nothing else. 
//Interfaces cannot do this. Again, this is something Type Alias is really good at. 

/*
An interface is like a set of rules or a contract. 
It simply says, "If you want to become this kind of object, these are the properties you must have."

Suppose you are working for any e-commerce company like Amazon. On this website, thousands of products are sold every day:
- mobile phones
- laptops
- televisions
- headphones

Although these products are different, every product must have some basic
information like product name, price, brand, and rating. 

Without these details, the website cannot display the product properly.

Instead of telling every developer separately what a product should contain, the company will create one common contract.

This contract says every product object should contain these properties. That contract is exactly what an interface is.

*/

interface Product {
    name: string,
    price: number,
    brand: string,
    rating: number
}

/*
Now, whenever a developer creates a product object, TypeScript will check whether it is following the contract or not. 
*/

const mobile: Product = {
    name: "iPhone 18",
    price: 30000,
    brand: "Apple",
    rating: 4.8
}

//I'm not getting any error above because my mobile object is following all the rules.
//Suppose I create a new project product, but I forget to add the price.

const laptop: Product = {
    name: "Macbook Air",
    brand: "Apple",
    rating: 4.9
}

//Immediately, TypeScript is giving me an error because the contract
//Product clearly says every product should also have a price. 
//The interface is protecting us from creating incomplete objects, so the interface is more like a checklist.

/*
Before an object enters your application, TypeScript asks, "Have you completed
everything mentioned in the checklist?" If the answer is yes, everything is fine,
but if the answer is no, you get a compile-time error. 

Suppose the government says every applicant must provide:
- name
- date of birth
- nationality
- address

All these fields become mandatory, meaning you cannot decide to skip your name or nationality.

Similarly, an interface will tell TypeScript every object of this kind must provide these required properties.

Just like a passport form has some mandatory fields, an interface has mandatory properties.

An interface is a contract that defines what an object must contain.

It is not storing any data. It does not create objects. It simply defines the rules that objects must follow.

Employee ID, name, and department. 

Interfaces are meant to represent contracts that can grow over time. 
As your application grows, different teams can keep adding more rules to
the same contract. This makes interfaces perfect for defining the structure of objects in large applications. 

*/

interface Employee {
    id: number,
    name: string
}

interface Employee {
    department: string
}

interface Employee {
    floor: number
}

/*
I created the same interface three different times, and TypeScript did not complain.
TypeScript has merged all of them together.

Now the final employee interface contains four properties:
- ID
- name
- department
- floor

This is one of the biggest reasons interfaces exist. 

*/

type Employee2 = {
    id: number,
    name: string    
}

type Employee2 = {
    department: string
}

//Immediately, TypeScript is giving me an error because a type is treated as a complete definition.
//Once you have created a type alias, you cannot create another type with the same name. 

//A type does not merge while an interface does. 

//The interface is for creating contracts that can grow with your application. 
//Type is for describing any kind of data, whether it is an object, a string,
//a number, a union, a tuple, or something more advanced. 
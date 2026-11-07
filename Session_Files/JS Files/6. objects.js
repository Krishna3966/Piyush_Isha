
//In JavaScript, there are two ways of creating an object:
// 1. a stand-alone object
// 2. a class object

//Context is missing, and it is very hard to figure out what is what. 
// const fitbitdata = [
//     308727,
//     1826,
//     211.70,
//     5755
// ]

//In the case of objects, we provide additional context called key-value pairs.

//In the case of objects, there is no indexing or positioning concept only. 

//There are two reasons for having keys. 
//1. First reason is to give meaning to the value.
//2. Second reason is using the key, I can even access the value

// const fitbitdata = {
//     totalSteps: 308727,
//     totalFloors: 1826,
//     totalMiles: 211.70
// }

const fitbitdata = {
    totalSteps: 308727,
    totalFloors: 1826,
    totalMiles: 211.70
}

//Object is just a container that contains information in the form of key-value pairs.
//And we use the key to access or find the value. 

const data = { a: 1, b: 2, c: 3 }

//Keys are automatically converted to strings.
//Keys are stringified in the case of objects. 

//There are two ways of accessing the data from an object. 
//1. The dot notation(99% times use this) - If I try to access a
//key using the dot rotation which is not present in the object, it gives me undefined.

//2. The square bracket syntax(Only with dynamic expressions.) -
//Inside the square brackets, if you write something without the
//single or double quotes, it is treated like an expression. 

console.log(fitbitdata.totalFloors)
console.log(fitbitdata.totalMiles)

console.log(fitbitdata['totalFloors'])
console.log(fitbitdata['totalMiles'])

const palette = {
    red: '#red',
    yellow: '#yellow',
    blue: '#blue'
}

// console.log(palette.red)
// console.log(palette['red'])

let color = 'green'
console.log(palette.color)   //undefined. There is no key called color.   
console.log(palette[color]) //palette['yellow'] . This is dynamic expression

//Adding and updating properties
const userReviews = {}      //Empty object to start with

//Inside this object, I can add n number of key-value pairs.

userReviews['queenBee'] = 4
userReviews.mrSmith = 5

console.log(userReviews)

//Nested arrays and objects
/*
A nested object simply means an object inside an object.
In real applications, we rarely store everything in one flat object.
Instead, related information is grouped together.

Suppose I want to store information about a user, say name, email, address. 
Address itself has multiple fields like city, state, and pin code. 

*/

// const user = {
//     name: 'Piyush',
//     email: 'piyush@test.com',
//     addressCity: 'Chandigarh',
//     addressState: 'Punjab',
//     addressPinCode: '111111',
// }

const user = {
    name: 'Piyush',
    email: 'piyush@test.com',
    address: {
        addressCity: 'Chandigarh',
        addressState: 'Punjab',
        addressPinCode: '111111',
    }
}

//Music and Arts
//92, 88
const student = {           //student -> 777
    firstName: 'David',
    lastName: 'Jones',
    strengths: ['Music', 'Arts'],
    // exams: [92, 88],
    exams: {
        midterm: 92,
        final: 88
    }
}

const student1 = {}                 //I am creating a brand new object with a brand new pointer student1. 888
const student2 = student            //Here I am creating a second pointer to the same object(student, student2) 

//Here we are comparing the pointers. Are they pointing to the same object or not? 
// Student is pointing to one object, and student one is pointing to a completely different object, so it has to be false. 
console.log(student === student1)       //false

console.log(student === student2)       //true
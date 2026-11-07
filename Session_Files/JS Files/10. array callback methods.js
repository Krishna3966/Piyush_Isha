
//forEach()
//map()
//filter()

//There are some array methods which only accept a callback.

//1. forEach()
//forEach is a method in JavaScript that internally uses a loop to iterate over elements.
//Accepts a callback function. Calls the callback once per element in the array
//We dont need return keyword
//n refers to each element of the arr

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// for(let i = 0; i < nums.length; i++){
//     console.log(nums[i])
// }

// for(const num of nums){
//     console.log(num)
// }

//forEach - It is a method but behaves like a loop, but it is not a loop.

//nums.forEach(instruction)
//This is the common instruction that I want to execute for each element of the nums array. 

//
nums.forEach(function (num){
    console.log(num)
})

//Arrow function

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
nums.forEach((num) => {
    console.log(num)
})


const books = [
   {
       title: 'Five Point Someone',
       author: 'Chetan Bhagat',
       rating: 4.2
   },
   {
       title: 'Time Money Freedom',
       author: 'Ray Milton',
       rating: 4.5
   },
   {
       title: 'You Are SuperNatural',
       author: 'Joe Dispenza',
       rating: 4.6
   },
]

//My requirement is to print each book's author.
books.forEach(function (book){
    console.log(book.author)
})

//2. map()
//It is used to create a new array from an existing array by applying some logic
//on each element of the array. It does not alter/update the original array. Use
//the return keyword inside the callback.

//The real meaning of map is transformation.
//The newly created array will always have the same length as the original array.
const texts = ["rofl", "lol", "omg", "ttyl"]

const caps = texts.map(str => {
    return str.toUpperCase().split("").join(".")
})

console.log(texts)
console.log(caps)       //[ 'ROFL', 'LOL', 'OMG', 'TTYL' ]

//'ROFL'    -> ['R', 'O', 'F', 'L'] -> 

//[ 'R.O.F.L', 'L.O.L', 'O.M.G', 'T.T.Y.L' ]

function square(x){
    return x ** 2
}

const square = x => {
    return x ** 2
}

//For more than one parameter, you do need parentheses.
const multiply = (x, y) => {
    return x * y
}

console.log(multiply(5, 4))

//Implicit return - In scenarios where we want to return just one expression as
//shown above, we can rewrite this arrow function using parentheses instead of
//curly braces. We also need to omit the return keyword. We can't use a return
//statement or we will get an error. We cant use semicolon also after x*x

//Implicit return also means automatic return. 

const square = x => {
    return x ** 2
}

const square = x => x ** 2

console.log(square(5))

const num1 = [1,2,3,4,5,6,7,8]

//['Odd', 'Even', 'Odd', 'Even', 'Odd', 'Even', 'Odd', 'Even']

const parity = num1.map(num => {
    if(num % 2 === 0){
        return 'Even'
    } else {
        return 'Odd'
    }
})

const parity = num1.map(num => {
    if(num % 2 === 0){
        return 'Even'
    } 
    return 'Odd'
})

console.log(parity)

//condition ? expIfTrue : expIfFalse

const parity = num1.map(num => {
    return num % 2 === 0 ? 'Even' : 'Odd'
})

const num1 = [1,2,3,4,5,6,7,8]
const parity1 = num1.map(num => num % 2 === 0 ? 'Even' : 'Odd')

console.log(parity1)

//3. filter()
//Accepts a callback function. Creates a new array with all elements that pass
//the test provided by the implementation function/condition. Use the return
//keyword inside the callback.

const nums = [1,2,3,4,5,6,7,8]

//I want only those numbers that are less than or equal to 5.
//forEach?
//map?

const arr1 = nums.filter(num => num <= 5)
console.log(arr1)

//Here is the books array defined above
const books = [
    {
        title: 'Five Point Someone',
        author: 'Chetan Bhagat',
        rating: 4.2
    },
    {
        title: 'Time Money Freedom',
        author: 'Ray Milton',
        rating: 4.5
    },
    {
        title: 'You Are SuperNatural',
        author: 'Joe Dispenza',
        rating: 4.6
    },
]

//Return all the books that have a rating >= 4.5.

//Return the book if the condition on the right-hand side is true. 
const goodBooks = books.filter(book => book.rating >= 4.5)
console.log(goodBooks)

//Now return only those books that have an author which contains Ray
console.log(books.filter(book => book.author.includes('Ray')))
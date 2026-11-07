
/*
Suppose I ask you to print `Hello` one time. 
console.log("Hello")

Now the requirement is to print it 10 times.

console.log("Hello")
console.log("Hello")
console.log("Hello")
console.log("Hello")
console.log("Hello")
console.log("Hello")
console.log("Hello")
console.log("Hello")
console.log("Hello")
console.log("Hello")

Now the next requirement is to print it 1,000 times.
I can still copy and paste this 1,000 times, but this would be very
boring, very time-consuming, and impossible to maintain. This is
exactly why programming languages provide something called `loops`.

A loop simply means repeat the same task again and again until a condition is no longer true.

console.log("1")
console.log("2")
..
..
console.log("5")

for, while
Modern loops -> for..of, for..in

*/

//1. for loop
//We use a for loop when I know in advance how many times I
//want to run the same piece of code again and again.

/*
for(initialExpression; condition; increment/DecrementExpression){
        loop Body
}

If the condition(2) is true, JavaScript will execute the loop body(3) once. 
If the condition is false, JavaScript will not go inside the loop,
and it will simply stop the loop and simply proceed. 

*/

//i = 11

//i -> Loop counter variable 
//Semi-colon(;) is the separator. 
//Iteration -> Each loop execution is called one iteration. 10 iterations. 
// for(let i = 1; i <= 10; i = i + 1){     // i += 1 OR i++
//     console.log("Hello", i)
// }

for (var i = 1; i <= 10; i++) {     // i += 1 OR i++
    console.log("Hello", i)
}

console.log(i)

//Hello 1
//Hello 2
//..
//..
//Hello 10

//Infinite loop - An infinite loop is something that never stops running.
//In this case, the condition is always true. 
for (let i = 20; i >= 0; i++) {
    console.log(i)
}

//for loops with arrays

const animals = ['lion', 'tiger', 'bear']

//My requirement is to print each animal one by one. 
// console.log(animals[0])
// console.log(animals[1])
// console.log(animals[2])

//Above quote has terrible repetition.
//Loop
// for(let i = 0; i < 3; i++){
//     console.log(animals[i])
// }

//The above code is not scalable because I am saying run this loop exactly three times.
//In the real world, I don't want to hard code this number. I want to fetch it at run time. 

//-------------------------------------->
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i])
}

//An array of objects. 
const myStudents = [
    {
        firstName: 'Artemis',
        grade: 97
    },
    {
        firstName: 'Hera',
        grade: 65
    },
    {
        firstName: 'Apollo',
        grade: 87
    },
]

//Req1 - My requirement is to print each student's name.
// for(let i = 0; i < myStudents.length; i++){
//     console.log(myStudents[i].firstName)
// }

//Req2 - I want this output. 
//Artemis scored 97.
//Hera scored 65.
//Apollo scored 87. 

for(let i = 0; i < myStudents.length; i++){
    console.log(`${myStudents[i].firstName} scored ${myStudents[i].grade}`)
}

const word = 'stressed'
//Even though the length is 8, the last character has an index of 8 - 1 = 7
word[8]
//The requirement is to reverse this word.
//desserts

/*
<--------------------
d   -> d
e   -> de
s   -> des
s   -> dess
e   -> dess
r
t
s

*/

let reverse = ""            //The default value of any variable is undefined. 
for(let i = word.length - 1; i >= 0; i--){
    reverse += word[i]         //'undefined' + 'd'
}
console.log(reverse)

const word = 'stressed'

//We can use the reverse() method. But we have a big issue. 
//We don't have an array at this point. We just have a plain string.

//Now I have to think: is there a way to convert this string to an array so that I can use reverse? 

//'stressed'    -> ['s', 't', 'r',......].reverse() ---> ['d', 'e', 's',.....]

//I will use the `split` method so that I can use `reverse`.
//Finally, I'll use join.  

console.log(word.split("").reverse().join(""))

console.log("Madhavi".split("dha"))

//While loop
//A while loop continues to run as long as the condition is true.
//We use a while loop when we are not sure in advance how many times I want to run a loop.

for (let i = 1; i <= 10; i++) {     // i += 1 OR i++
    console.log("Hello", i)
}

//Here we are getting the same output as for the loop, but we should not use the while loop.
//I clearly know in advance I have to run this loop 10 times, so a
//while loop is not a good candidate for this. 
let i = 1
while(i <= 10){
    console.log("Hello", i)
    i++
}

/*
target = 5(FIX)
guess = 1, 4, 8, 1, 5

Do we know in advance how many guesses would be needed to find out the target? 
NO
*/

const target = Math.floor(Math.random() * 10)     // 0 - 9      //5
let guess = Math.floor(Math.random() * 10)     // 0 - 9         //1, 4, 8, 1, 5

//Keep repeating until and unless target and guess are not the same. 
// while(target !== guess){        //5 !== 5
//     guess = Math.floor(Math.random() * 10)
//     console.log(`Target: ${target}, Guess: ${guess}`)   //Intermediate values
// }
// console.log(`Target: ${target}, Guess: ${guess}`)       //Final value
// console.log('Congrats/// You won!!!')

//TODO - You just have to print how many attempts I have done to find the correct match.

while(true){     
    if(target === guess)   break
    guess = Math.floor(Math.random() * 10)
    console.log(`Target: ${target}, Guess: ${guess}`)   //Intermediate values
}
console.log(`Target: ${target}, Guess: ${guess}`)       //Final value
console.log('Congrats/// You won!!!')

//for..of loop
//It's a very nice and easy way to iterate over arrays and strings
/*
Syntax

for(const variable of iterable){
    Loop body
}

*/


const animals = ['lion', 'tiger', 'bear']

// for (let i = 0; i < animals.length; i++) {
//     console.log(animals[i])
// }

//This loop automatically goes from left to right. 
//It automatically includes every array element. 
//It automatically increments by 1
for(const animal of animals){
    console.log(animal)
}

for(const char of 'Piyush'.split("").reverse().join("")){
    console.log(char)
}

//You cannot use the `for..of` loop with an object.
const palette = {
    red: '#red',
    yellow: '#yellow',
    blue: '#blue'
}

//TypeError: palette is not iterable
// for(const key of palette){
//     console.log(key)
// }

//That is the reason we have another loop called as for..in.
for(const key in palette){
    // console.log(key, palette.key)
    console.log(key, palette[key])
}
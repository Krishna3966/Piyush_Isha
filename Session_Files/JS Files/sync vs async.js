
//In synchronous execution, JavaScript runs one line of code at a time.
//It does not move to the next line until the current line finishes execution.

//Nothing else can run until the current task finishes.
//This type of execution is called blocking or synchronous execution. 
console.log("Start")
console.log("Processing")
console.log("End")


console.log("Start")

//This function will take three seconds to execute.
function fetchData() {
    let start = Date.now()

    while (Date.now() - start < 3000) {
        // simulate heavy work for 3 seconds
    }

    console.log("Data loaded")
}

//JavaScript waits until the function completes before moving to the next line. 
fetchData()

console.log("End")

//Asynchronous Programming

console.log("Start")

//setTimeout(callback, delay)
setTimeout(() => {
    console.log("Async task finished")
}, 2000)

console.log("End")

//Sync = Blocking in nature
//Async = Non-Blocking in nature

//Callbacks
//A callback is simply a function passed into another function
// so that it can be executed later.

//In the real world, we have some tasks that depend on each other.

//For example

//Step 1 - Open the application.
//Step 2 - Enter the username.
//Step 3 - Enter the password.
//Step 4 - Click the login button.

//It's called callback hell or pyramid of doom. 
setTimeout(() => {
    console.log("Open the application")

    setTimeout(() => {
        console.log("Enter the username & password")

        setTimeout(() => {
            console.log("Click the login button")
        }, 1000)

    }, 1000)

}, 1000)

//Promises
//Pending, Resolved(fulfilling the promise) or rejected(breaking the promise)

//Promises help us write asynchronous code in a more structured and more readable way. 

function delay(message, time) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(message)
        }, time)
    })
}

//The meaning of "promise is resolved" is that this asynchronous task is fully executed.
//The meaning of "promise is rejected" is that this asynchronous task is not working properly.

delay("Open the application", 1000)
    .then(()=> delay("Enter the username & password", 1000))        //Read the then() method like English then
    .then(()=> delay("Click the login button", 1000))
    .then(()=> console.log("All steps finished"))

//In modern JavaScript, JavaScript introduced an even simpler syntax called async and await.

//With `async` and `await`, asynchronous code(non-blocking) looks almost like synchronous code(blocking code).

function delay(message, time) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(message)
            resolve()
        }, time)
    })
}

async function runTasks(){
    console.log("Start")

    await delay("Open the application", 1000)   //Don't move to the next line unless this task is fully executed.
    await delay("Enter the username & password", 1000)
    await delay("Click the login button", 1000)
    
    console.log("End")
}

runTasks()

//Callbacks -> Promises -> Async/await

//Asynchronous code is code that takes time to complete but does not block the rest of the programme from running.

//It takes time.
//It does not block execution. 

//Sync = wait(blocking)
//Async = do not wait(non-blocking)



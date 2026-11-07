//this keyword in JS

//Not only can we add regular key-value pairs, we can also add functions to objects.
//Methods
const person = {
    first: 'Piyush',
    last: 'Gupta',
    nickName: 'PSV',
    fullName(){
        const {first, last, nickName} = this
        console.log(`${first} ${last} -> ${nickName}`)       //this -> person
    }
}

//`this` keyword is inside the person object.
//So, it will refer to the person object only. this -> person
person.fullName()

const person1 = {
    first: 'Amit',
    last: 'Misha',
    nickName: 'AM',
    fullName(){
        console.log(this)           //this -> person1
    }
}
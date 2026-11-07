
//These functions are fully standalone by nature.

//Area of a right-angled triangle
function getTriangleArea(a, b) {
    return (a * b) / 2
}

//Hypotenuse of a right-angled triangle. 
function getTriangleHypotenuse(a, b) {
    return Math.sqrt(a ** 2 + b ** 2)
}

console.log(getTriangleArea(3, 4))
console.log(getTriangleHypotenuse(3, 4))

console.log(getTriangleArea(5, 12))
console.log(getTriangleHypotenuse(5, 12))

//Am I organizing these functions in any way?
//NO

//What we can do is we can combine our data with functions inside an object.

//It is one triangle which has two sides, a and b, which are 3 and 4, and it has two functions.
//Technically, it is called a method.
const myTri = {
    a: 3,
    b: 4,
    getArea() {
        return (this.a * this.b) / 2
    },
    getHypotenuse() {
        return Math.sqrt(this.a ** 2 + this.b ** 2)
    }
}

console.log(myTri.getArea())
console.log(myTri.getHypotenuse())

//The nicer thing about an object is we are wrapping the data together
//with functionality, so from an organising point of view, this is a lot better. 

const myTri2 = {
    a: 5,
    b: 12,
    getArea() {
        return (this.a * this.b) / 2
    },
    getHypotenuse() {
        return Math.sqrt(this.a ** 2 + this.b ** 2)
    }
}

//We have a much better option in JavaScript that allows us to
//combine functionality with data, and that is called Classes

//The number one reason I am using classes and objects is for organizing my code in a better way.

/*
Suppose I am an architect.
What does an architect do? 

An architect designs buildings.

Suppose a client comes to me and says, "Hey Piyush, I want you to build an apartment."

Can I immediately start constructing the building?
NO

Before constructing anything, I first need a plan. I need a blueprint.
This blueprint contains all the details about this building. 

For example:
- How many rooms the building will have
- How many floors it should contain
- Where the doors and windows should be
- Whether there should be parking or not
- Whether there should be a lift or not
- Where the kitchen should be

Everything is planned inside the blueprint first.

Can people live inside the blueprint?
NO

Can the blueprint itself become a building?
NO

Blueprint is just a design. It is simply a template or a plan.
The real building is created later using that blueprint.

Using one blueprint, I can create multiple buildings. For example, building B, building C.

All of them may follow the same design.

In object-oriented programming 
Blueprint = Class
Real Building = Object

A class is basically a design or a template. It defines what properties and behaviours an object should have.
Class is not really usable.
The real thing is the object created from the class. 



*/

//Blueprint/Design/Pattern
class Building {
    //This building will have a `name` and a certain number of `floors`. 
    constructor(name, floors){
        this.name = name
        this.floors = floors
    }

    showDetails(){
        console.log(`${this.name} has ${this.floors} floors`)
    }
}

//The real value of this blueprint comes only when we start creating actual buildings from this blueprint.

const building1 = new Building("Sky Tower", 10)
const building2 = new Building("Green Residency", 5)

building1.showDetails()
building2.showDetails()



//Constructor is really a nice feature to initialize the properties. 
//Constructor is just a regular old function. There is nothing
//fancy about it except for the fact that the constructor
//is called automatically whenever you create a new instance. 

class Triangle {
    //The constructor is called automatically whenever you create the object of a class.
    constructor(a, b) {
        if(!Number.isFinite(a) || a <= 0){
            throw new Error(`Invalid a: ${a}`)
        }
        if(!Number.isFinite(b) || b <= 0){
            throw new Error(`Invalid b: ${b}`)
        }        
        this.a = a
        this.b = b
    }

    //Methods
    getArea() {
        return (this.a * this.b) / 2
    }

    getHypotenuse() {
        return Math.sqrt(this.a ** 2 + this.b ** 2)
    }

    sayHi(){
        return `This is the area of Triangle ${this.getArea()}`
    }
}

const myTri = new Triangle(3, 4)        //Instantiation
console.log(myTri.getArea())
console.log(myTri.getHypotenuse())

const secondTri = new Triangle(5, 12) 

console.log(secondTri.getArea())
console.log(secondTri.getHypotenuse())
console.log(secondTri.sayHi())

// const badTri = new Triangle(true, "Piyush") 
// console.log(badTri)

/*
The most common thing we do in the constructor is data validation and assigning properties.

In JavaScript, we can only have one single constructor, and if
you try creating multiple constructors, JavaScript throws an error.
*/
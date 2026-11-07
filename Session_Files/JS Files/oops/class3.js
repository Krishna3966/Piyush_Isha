
class Triangle {
    constructor(a, b) {       
        this.a = a
        this.b = b
    }

    getArea() {
        return (this.a * this.b) / 2
    }

    getHypotenuse() {
        return Math.sqrt(this.a ** 2 + this.b ** 2)
    }

    //This is a triangle which describes itself in a certain way.
    describe(){
        return `I am a triangle with an area of ${this.getArea()}`
    }
}

//I want another triangle which describes itself but in a slightly different way.
//Repetition is terrible. You should never, ever repeat the code.

//ShyTriangle Is the child/sub class and triangle is the parent/super class? 
//ShyTriangle has access to triangles constructor and all its methods.

class ShyTriangle extends Triangle{
    describe(){
        return `(runs and hides)`
    }
}

const regularTri = new Triangle(3, 4)
const shyTri = new ShyTriangle(3, 4)

console.log(regularTri)
console.log(shyTri)

//Using inheritance, we can avoid duplicating the logic of
//using the constructor, `getArea`, and `getHypotenuse` methods.
//Instead, I can just create a new class with only the desired changes. 
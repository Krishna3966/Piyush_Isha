
class Triangle {
    getArea() {
        return (this.a * this.b) / 2
    }

    getHypotenuse() {
        return Math.sqrt(this.a ** 2 + this.b ** 2)
    }
}

const myTri = new Triangle()        //Instantiation

console.log(myTri)  //{}

myTri.a = 3
myTri.b = 4

console.log(myTri)  //{a: 3, b: 4}

console.log(myTri.getArea())        //6
console.log(myTri.getHypotenuse())  //5

const secondTri = new Triangle() 

secondTri.a = 5
secondTri.b = 12

console.log(secondTri.getArea())        
console.log(secondTri.getHypotenuse())
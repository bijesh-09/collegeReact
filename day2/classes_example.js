//class:blueprint
//object:instance
//class:exmaple
// class car{
//     constructor(color, wheel,brand,model){
//             //initail setup for the class
//             this.color = color
//             this.wheel = wheel
//             this.brand = brand
//             this.model = model
//     }

//     //methods of the class
//     start(){
//         console.log(`${this.brand} ${this.model} started`)
//     }
//     break(){
//         console.log(`${this.brand} ${this.model} stopped`)
//     }
// }
// //creating object or instance of the car class
// let mercedes = new car ("red",4,"mercedes","amg gt63 se")
// let bmw = new car ("black",4,"bmw","e39 m5")
// console.log(mercedes.model)
// console.log(bmw.wheel)
// bmw.start()
// bmw.break()
// mercedes.start()

class Vehicle{
    constructor(type){
        this.type = type
    }
    move(){
        console.log(`${this.type} is moving`)
    }
}

class Car extends Vehicle{
    constructor(brand,color){
        super("Car") //must call parent class constructor to set up the base class before going to derived clss
        this.brand = brand
        this.color = color
    }
    start(){
        console.log(`${this.brand} is starting...`)
    }
    horn(){
        console.log(`${this.brand} is honking... Beep Beep!`)
    }
    move(){//overrides the move method of Vehicle classwha
        console.log(`${this.brand} car is moving fast!`)
    }
}

const myCar = new Car("Toyota","Blue")
myCar.start() //calling method from Car class
myCar.horn() //calling method from Car class
myCar.move() //calling method from Car class (overridden)

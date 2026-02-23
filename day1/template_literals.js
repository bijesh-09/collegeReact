// template literals or string interpolation 
// symbol: `${}`
let message = "Namaste"
let countryName = "Nepal"
let countryCode = "NP"
let noOfProvince = 7

//traditional method
let fullMessage = message + " " + countryName + "! Code: " + countryCode + " Provinces: " + noOfProvince
console.log("Traditional way: ", fullMessage)

//using template iterals
let originalMessage = `${message} ${countryName}! Code: ${countryCode} Provinces: ${noOfProvince}`
console.log("Using template iterals: ",originalMessage)
console.log(`Using template iterals: ${originalMessage}`)

let myArrowFuntion = ()=>{ //multi-line no name fn, but needed to name the arrow fn to call it
    console.log("arrow function called")
}
//calling arrow function
myArrowFuntion()

//single line arrow function
// let add = (a,b)=>a+b
// let result = add(2,3)
// console.log(result)

// let r2 = add(30)
// let r3 = add()
// console.log("r2:",r2)//prints NaN i.e. Not a Number
// console.log("r3:",r3)//prints NaN i.e. Not a Number

//single line fn but with default args
let add = (a=0,b=0)=>a+b// this expn returns the sum directly to the add variable, no explicit "return" needed, and arrow fn do not require curly braces for single line fn body
let result = add(2,3)
console.log(result)
console.log(add(2,3))

let r2 = add(30)
let r3 = add()
console.log("r2:",r2)
console.log("r3:",r3)

let numbers = [10,12,14,16] 
// destructuring array 
let [a,b,c] = numbers
console.log(a,b,c)
//destructuring key:value pairs object
let myObj = {
    fullName: "Ram Karki",
    age: 23,
    address: "kathmandu",
    "gender" : "Male"
}
let {gender, age, fullName} = myObj
console.log("gender:",gender)
console.log(`age: ${age}`)
console.log("full name:",fullName)
/*
Use quotes ("gender") when:

The key contains special characters or spaces: { "full name": "John" }
The key is a reserved word: { "class": "active" }
The key starts with a number: { "2name": "value" }
You're accessing via bracket notation and want string literals: obj["gender"]
 */


// Task 1 – Variables and Template Literals
// Create two variables, firstName and lastName, and combine them into a greeting message using template literals. Log the message.
let firstName = "Ram"
let lastName = "Shrestha"
console.log(`Greetings ${firstName} ${lastName}!`);

// Task 2 – let and const Scope
// Create a let variable inside a block {} and try to access it outside. Then do the same with a const variable. Observe the errors.
{
    let var1 = "I am a let variable";
    const var2 = "I am a const variable";
    console.log(var1); // This will work
    console.log(var2); // This will work
}
// console.log(var1); // This will throw an error
// console.log(var2); // This will also throw an error

// Task 3 – Arrow Function Simple
// Write an arrow function greet that takes a name and returns "Hello, !". Test it with your name.

greet = (name) => {
    return `Hello, ${name}!`
}
console.log(greet("Ram"));

// Task 4 – Arrow Function with Multiple Parameters
// Write an arrow function multiply that takes two numbers and returns their product. Log the result for 5 and 6.

multiply = (a, b) => {
    return a * b;
}
console.log("Product:", multiply(5, 6));

// Task 5 – Object Destructuring
// Create an object person with keys name, age, and country. Destructure the object to extract name and country into variables and log them.

const person = {
    name: "Ram Shrestha",
    age:30,
    country: "Nepal"
}
const {name, country} = person;
console.log("Name:", name);
console.log("Country:", country);

// Task 6 – Array Destructuring
// Create an array [10, 20, 30, 40]. Destructure the first two elements into variables and log them.

let arr = [10, 20, 30, 40];
let [first,second] = arr;
console.log("First Element:", first);
console.log("Second Element:", second);

// Task 7 – Default Parameters
// Write a function sayHello with a parameter name that defaults to "Guest" if not provided. Log the output when called with and without an argument.

hello = (name="Guest" ) => {
    console.log(`Hello, ${name}!`)
}
hello()
hello("Ram")

// Task 8 – Rest Operator (Sum of Numbers)
// Write a function sumAll using the rest operator (...numbers) that calculates the sum of any number of inputs. Test with 1, 2, 3, 4.

const sumAll = (...numbers) => {
    return numbers.reduce((total,n) =>  total += n , 0)
}
console.log("Sum: ", sumAll(1,2,3,4))

// Task 9 – Spread Operator with Arrays
// Create two arrays [1, 2, 3] and [4, 5]. Merge them into a new array using the spread operator and log the result.

let arr1 = [1,2,3]
let arr2 = [...arr1,4,5]
console.log("Merged Array:", arr2);

// Task 10 – Merge and Destructure Objects
// Create two objects: {a: 1, b: 2} and {c: 3, d: 4}. Merge them using the spread operator. Then destructure the merged object to extract a and d and log them.

let obj1 = {a:1, b:2,}
let obj2 = {c:3, d:4}
let mergedObj= {...obj1, ...obj2}
let {a,d} = mergedObj
console.log("a:", a);
console.log("d:", d);

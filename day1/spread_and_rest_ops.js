//spread and rest operators
//symbol "..."

//spread operator

let myArray1 = ["mango", "apple", "coconut"]
let myArray2 = ["Watermelon", "Papaya", "Pineapple"]
console.log("array = ",myArray1)
console.log("spreaded array = ",...myArray1)
let mergeArray = [...myArray1, ...myArray2, "Grapes"]
console.log("merged array = ",mergeArray)

//spread for object (key:value pair)
let obj1={
    marks : 40,
    subject: "math",
    passMarks: 30
}
let obj2 = {
    studentName : "Sanni Dancer",
    contact: 98422,
    address: "Bihar",
    ...obj1
}
console.log("spreaded key value pair = ", obj2)

// rest operator example
let sum = (a,b,c,d,e,f,g,h,i,j,k,l) => {
    return a+b+c+d+e+f+g+h+i+j+k+l
}
console.log(sum(1,2,3,4,5,6,7,8,9,10,11,12))

//using rest operator
let sumUsingRest = (...values) =>{
    return values.reduce(
        (accumulator, currentValue) => {
            return accumulator + currentValue
        },
        0// the 1st parameter in the funtion arg in reduce(call_back_fn , initial_value) is assigned with this value i.e. 0
    )

    //can be done this way as well
    // let sum = 0
    // for(let i = 0; i<values.length;i++){
    //     sum+=values[i]
    // }
    // return sum
}
let result = sumUsingRest(1,2,3,4,5,6,7,8,9)
console.log("result = ",result)

numberArray = [1,2,3,4,5,6,7,8,9]
let sumUsingSpreadAndRestOperator = (...numberArray) => {
    return numberArray.reduce(
        (accumulator, currentValue) => {
            return accumulator + currentValue // here this return value is assigned to accumulator parameter of the arrow fn in the next iteration
            //the iteratin goes on until all the elements in the array are traversed
        },
        0// the 1st parameter in the funtion arg in reduce(call_back_fn , initial_value) is assigned with this value i.e. 0
    )
} 
console.log("rest and spread result = ",sumUsingSpreadAndRestOperator(...numberArray) )
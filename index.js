//var: functional scope variable
//let, const: block scope variable
//var, let, const: dynamically type variable

//function scope eg: var
function myFunction(){
    var a = "hello"
    console.log(a)
    //block
    if(true){
        var b = "world"
        console.log(b)
    }
    console.log("outside block: " ,b)//prinnts
}
//funtion call
myFunction()
// console.log("outside funciton: ",a)//doesnt print

//block scope eg
for(let i = 0 ; i <=3; i++){
    console.log(i)
    var pi  = 3.1415
}
console.log("Outside block scope: ", pi)

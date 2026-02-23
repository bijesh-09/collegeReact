// promises: used to handel asynchronous operations
// syntax: new promise((resolve, reject) => {})
// resolve: when the operation is successful
// reject: when the operaton is failed
// resolve and reject are the functions

// creating promises
// let myPromise = new Promise(
//     (resolve, reject) => { //HERE THE OPERATION INSIDE THIS FN IS SYNCHRONOUS CUASUE THE REOLCVE AND REJECT IS SELECTED IMMEDIATELY
//         let iHaveDoneMyWork = false;
//         if (iHaveDoneMyWork) {
//             resolve("I have done my work")
//         } else {
//             reject("I havent done my work")
//         }

//     }

// )
// console.log("myPromise created")

// // consuming promise
// myPromise.then((result) => {
//     console.log("inside myPromise.then")
//     console.log(result)
// }).catch((error) => {
//     console.log("inside myPromise.catch")
//     console.log(error)
// }).finally(() => {
//     console.log("inside finally")
// })

// //eg2
// let orderPizza = new Promise(
//     (orderAccepted, orderRejected) => {//HERE THE OPERATION INSIDE THIS FN IS SYNCHRONOUS CUASUE THE REOLCVE AND REJECT IS SELECTED IMMEDIATELY
//         let pizzaShopOpen = true;
//         if (pizzaShopOpen) {
//             orderAccepted("Pizza order accepted")
//         }
//         else {
//             orderRejected("Pizza order rejected")
//         }
//     }
// )
// console.log("Ordering pizza... or promise created")
// orderPizza.then(
//     result => {
//         console.log("inside orderPizza.then")
//         console.log(result)
//     }

// ).catch(
//     error => {
//         console.log("inside orderPizza.catch")
//         console.log(error)
//     }
// ).finally(
//     () => { console.log("Thank you for visiting our pizza shop") }
// )
//in arrow fn, u can omit parentheses for a single parameter — it's optional sugar. Multiple parameters - parentheses REQUIRED

/*
Output:
myPromise created ->synchronous task
Ordering pizza... or promise created -> synchronous task
inside orderPizza.then
Pizza order accepted
inside myPromise.catch
I havent done my work
inside finally
Thank you for visiting our pizza shop

Note: js handles the promise handlers(i.e. then, catch and finally) by:
 All fulfilled promise handlers (.then) go into the microtask queue
All rejected promise handlers (.catch) go into the microtask queue
They're processed based on when their promises settled

so 1st js checks the all .then part of each promise, myPromise was created 1st so it checks myPromis.then 1st and finds nothing cuz iHaveDoneMyWork isfalse, then it checks for the 2nd most created promise which is orderPizza, so it will run orderPizza.then which contains the string "pizza order accepted " since the orderAccepted is true, after this it goes for myPRomis.caathch then orderPPizza.catch, then .finally resp

 */

//BUT IF I WANT TO MAKE THE PROMISES TRULY ASYNCHRONOUS, I HAVE TO USE setTimeout OR ANY ASYNCHRONOUS OPERATION INSIDE THE PROMISE CONSTRUCTOR FN, so the ouptut will be as expected on the basis of which the promises are queued to microtask queue 

//microtask queue is the part whose content is executed after the current synchronous code execution is completed

let myPromise = new Promise(
    (resolve, reject) => { //HERE THE OPERATION INSIDE THIS FN IS ASYNCHRONOUS CUASUE OF setTimeout
        setTimeout(
            () => {
                let iHaveDoneMyWork = false;
                if (iHaveDoneMyWork) {
                    resolve("I have done my work")
                } else {
                    reject("I havent done my work")
                }
            },0
        )

    }

)
console.log("myPromise created")

// consuming promise
myPromise.then((result) => {
    console.log("inside myPromise.then")
    console.log(result)
}).catch((error) => {
    console.log("inside myPromise.catch")
    console.log(error)
}).finally(() => { 
    console.log("inside finally")
})

//eg2
let orderPizza = new Promise(
    (orderAccepted, orderRejected) => {//HERE THE OPERATION INSIDE THIS FN IS ASYNCHRONOUS CUASUE OF setTimeout
        setTimeout(
            () =>{
                let pizzaShopOpen = true;
                if (pizzaShopOpen) {
                    orderAccepted("Pizza order accepted")
                }
                else {
                    orderRejected("Pizza order rejected")
                }
            }, 0
        )
    }
)
console.log("Ordering pizza... or promise created")
orderPizza.then(
    result => {
        console.log("inside orderPizza.then")
        console.log(result)
    }

).catch(
    error => {
        console.log("inside orderPizza.catch")
        console.log(error)
    }
).finally(
    () => { console.log("Thank you for visiting our pizza shop") }
)
/*
Output : as expected of fifo basis of microtask queueing
myPromise created
Ordering pizza... or promise created
inside myPromise.catch
I havent done my work
inside finally
inside orderPizza.then
Pizza order accepted
Thank you for visiting our pizza shop
 */
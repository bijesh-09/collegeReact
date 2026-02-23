// let getUserData = async()=>{
//     try{

//         let response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
//         let jsonData = await response.json()
//         console.log("data is: ",jsonData)
//         if(Object.keys(jsonData).length === 0){
//             throw new Error()
//         }
//     }catch(error){
//         console.log("error is: ",error)
//     }
//     finally{
//         console.log("fetching is done")
//     }
// }
// getUserData();

let check = (a,b) => {
    try{
        if(b==0){
            throw new Error("Division by zero is not allowed")
        }
        console.log("Result is: ",a/b)
    }
    catch(error){
        console.log("error is: ",error)
    }
    finally{
        console.log("Division operation is complete")
    }
}

check(1,2);
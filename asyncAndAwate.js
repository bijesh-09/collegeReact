// async function example
let getUser = new Promise((resolve, reject) => {
    // setTimeout is used to simulate asynchronous operation
    setTimeout(() => {
        resolve({ name: "John", age: 30 });
    }, 4000); // delay goes here
});

async function myFunction() {
    console.log("Loading....");
    let user = await getUser;
    console.log(user);
}

myFunction();

//using async and await for real fake api
let getUserFromFakeApi = async ()=>{
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await response.json()
    console.log(data)
}
getUserFromFakeApi()

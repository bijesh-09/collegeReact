let getUserById = async() => {
    try{
        console.log("fetching user data")
        let response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
        let realJsonData = await response.json()
        if(Object.keys(realJsonData).length === 0){
            throw new Error("No data found")
        }
        console.log("data: ",realJsonData)
    }
    catch(error){
        console.log("error is: ",error)
    }
    finally{
        console.log("fetching is done")
    }
}
getUserById();
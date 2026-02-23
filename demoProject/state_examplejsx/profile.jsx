import { useState } from "react";

let Profile = () => {
    //we need useState hook to use state in functional component cuz compnennts wont render in runtime though the variable value is changed in console
    // let count = 0;
    let [count, setCount] = useState(0)
    //the setCount fn rerenders the component with updated value of count i,e, the retun block of Profile Fn componenet
    // let test = useState(); -> returns an array with 2 elements where first is state variable and second is function to update the state variable
    // console.log("test: ",test)
    // [0,f] where f is function and 0 is initial value of state variable
    //destructuring state: let [a,b] = [23,43]
    return(
        <div>
            <h1>Profile Page</h1>
            {count%2 == 0 ? <p>Even</p> : <p>Odd</p>}   
            <p>Count: {count}</p>
            <button onClick={()=>{
                setCount(count + 1);
                console.log("Count:", count)
            }}>Increment</button>
        </div>
    )
}

let Greet = () => {
    return(
        <div>
            <div> <p>Greetings Mortal! For me its alive</p> </div>
        </div>
    )
}

export { Greet }
export default Profile;
//npm create vite@latest demoProject -- --template react
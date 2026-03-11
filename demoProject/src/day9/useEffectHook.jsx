import { useEffect } from "react";
import { useState } from "react";
const UseEffectHook = () => {
    //useeffect is a hook that allows us to perform side effects in function components. It takes a function as an argument and runs it after the component renders. We can use it to fetch data, set up subscriptions, and manually change the DOM in React components.

    //if only callback fn given , then it will run after every render of the component
    useEffect( () => {
        console.log("use effect hook called")
    })
    //with dependency array empty it will be called only once in the 1st render of the component
    useEffect( () => {
        console.log("use effect hook with empty dependency array called")
    },[] )

    const [count, setCount] = useState(0)

    useEffect( () => {
        console.log("use effect hook with dependency array count called")
    },[count] )

    
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
    },[] )
    

    return(
        <div>
            <h3>Use effect hook example</h3>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}
export default UseEffectHook;
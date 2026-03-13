import { useMemo, useState } from "react";

const expansiveCalculation = (num) => {
    console.log("Expensive calculation is called");
    for(let i=0; i<1000000000; i++){
        num += 1
    }
    return num;
}

const UseMemoExample = () => {
    console.log("Use memo example rendered");
    const [count, setCount] = useState(0);
    const [toggle, setToggle] = useState(false);
    // useMemo is a hoo that memoizes the RETURN VALUE of a function, and if the state of the fn is not changed then it returns the memoized value of the fn directly instead of calling that fn again and again
    //it helps in optimization
    let result = useMemo(() =>  expansiveCalculation(count) , [count]);

    return (

        <div>
            <h3>Use memo example</h3>
            <p>ExpansiveCalculation: {result} </p>
            <p>Count: {count} </p>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <p>Toggle: {toggle.toString()}</p>
            <button onClick={()=>setToggle(!toggle)}>Toggle</button>
        </div>
    )
}
export default UseMemoExample;
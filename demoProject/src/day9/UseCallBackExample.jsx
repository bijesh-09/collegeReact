import {memo, useCallback , useState} from "react";

const CustomButton = memo(  //memo memoizes the whole compoent or fn , and renders it only when the props of the fn inside it changes
    ({onClick, children}) => {
        console.log("Custom button rendered");
        return(
            <button onClick={onClick}>{children}</button>
        )
    }
)


const UseCallBackExample = () => {
    console.log("Use call back example rendered");
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
    const handleIncrement = useCallback( //usecallback also memoizes the whole fn but only calls the fn when the state changes
        () => {
            console.log("Increment function is called");
            setCount(count + 1);
        },
        [count]
    );
    const handleDecrement = useCallback(
        () => {
            console.log("Decrement function is called");
            setCount1(count1 - 1);
        },
        [count1]
    );
    return(
        //so using memo and usecallback helps to render only the componenet that has changed, not all the fns or components inside the main component, so it helps in optimization
        <div>
            <h3>Use call back example</h3>
            <p>Count: {count} </p>
            <CustomButton onClick={handleIncrement} children={"Increment count"}/>
            <p>Count1: {count1} </p>
            <CustomButton onClick={handleDecrement} children={"Decrement Count1"}/>
        </div>
    )
}
export default UseCallBackExample;
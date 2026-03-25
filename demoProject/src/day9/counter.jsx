import { useState , useReducer} from "react"
const CounterReducer = (state, action) => {
    switch (action.type) {
        case "inc":
            return {count: state.count + 1, name: state.name};
        case "dec":
            return {count: state.count - 1, name: state.name};
        case "rst":
            return {count: 0, name: state.name};
        default:
            return state;
    }

}
const Counter = () => {
    // const [count, setCount] = useState(0)
    const [state , dispatchEvent] = useReducer(CounterReducer, {count: 0, name: "MainCounter"})
    const handleIncrement = () => {
        dispatchEvent({type: "inc"}) /*dispatch fn calls the reducer fn automatically by providing the props: updated state and the action, here the object {type: "inc"} is the action*/
    }
    const handleDecrement = () => {
        dispatchEvent({type: "dec"})
    }
    const handleReset = () => {
        dispatchEvent({type: "rst"})
    }
    return(
        <div>
            <h3>Counter component</h3>
            <p>Count: {state.count}</p>
            <p>StateName: {state.name}</p>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}
export default Counter;
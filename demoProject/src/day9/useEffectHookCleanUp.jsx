import { useState, useEffect } from "react";

const useEffectHookCleanUp = () => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Setup: Set up a timer/subscription
        console.log("Timer started");
        const timer = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000);

        // Cleanup function: runs when component unmounts or before re-render
        return () => {
            console.log("Timer cleaned up");
            clearInterval(timer); // Remove the interval to prevent memory leak
        };
    }, []); // Empty dependency array = runs once on mount

    return (
        <div style={{ padding: "20px", border: "1px solid black" }}>
            <h3>Use Effect Hook Clean Up Example</h3>
            <p>Count: <strong>{count}</strong></p>
            <button onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? "Hide" : "Show"}
            </button>
            {isVisible && <p>Component is visible - timer is running</p>}
        </div>
    )
}
export default useEffectHookCleanUp;
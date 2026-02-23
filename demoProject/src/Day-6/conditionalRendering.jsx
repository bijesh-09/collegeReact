import {useState}from"react"
let ConditionalRendering = () => {
    const [age,setAge]=useState(40)
    return (
        <div>
            <h1>Conditional Rendering Example</h1>
            {/* conditional Rendering Example */}
            {
                age>40?<h2>Age is greater than 40</h2>:<h2>Age is less than or equal to 40</h2>
            }
            {
                age%2==0 && <b>Age is even </b>
            }
            {
                age>60 || <h2>Fallback value when age is not greater than 60</h2>
            }
        </div>
    )}

    export default ConditionalRendering
   
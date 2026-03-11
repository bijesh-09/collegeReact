// Uncontrolled form is a form that is not controlled by React. It is a form that is controlled by the DOM. The value of the input field is not stored in the state of the component. The value of the input field is stored in the DOM. The value of the input field can be accessed using the ref attribute.

import { useRef } from "react";
const UncontrolledForm = () => {
    const fullNameRef = useRef()
    const handleShowFullName = () => {
        alert("Ful name: " + fullNameRef.current.value)
    }
    return(
        <div>
            <h3>Uncontrolled Form</h3>
            <input type="text" placeholder="Enter your full name" ref={fullNameRef}/>
            <button onClick={handleShowFullName}>Show full name</button>
            <p>fullname: { fullNameRef.current && fullNameRef.current.value} </p>
        </div>
    )
}
export default UncontrolledForm;
//controlled form is a form where the form data is handled by the react component. The form data is stored in the state of the component and is updated on every change in the input fields. This allows us to have more control over the form data and also allows us to perform validation on the form data before submitting it.
import { useState } from "react";
const ControlledForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [fullName, setFullName] = useState("")

    const handleEmailChange = (e) => setEmail(e.target.value)
    const handlePasswordChange = (e) => setPassword(e.target.value)
    const handleFullNameChange = (e) => setFullName(e.target.value)

    const handleRegister = (e) => {
        e.preventDefault()
        if (email === "") {
            alert("Enter your email first")
        }
        else if (password === "") {
            alert("Enter your password first")
        }
        else if (fullName === "") {
            alert("Enter your full name first")
        }
        alert(`Email: ${email} \nPassword: ${password} \nFull Name: ${fullName}`)
    }
    
    return(
        <form onSubmit={handleRegister}>
            <h3>Controlled Form</h3>
            <div className="my-form-field">
                <label> Email</label>
                <input type="email" placeholder="Enter your email" onChange={handleEmailChange} name="email"/>
                {email && <p>Email: {email}</p>}
            </div>
            <div className="my-form-field">
                <label> Password</label>
                <input type="pas    sword" placeholder="Enter your password" onChange={handlePasswordChange} name="password" minLength={6}/>
                {password &&  <p>Password: {password}</p>}
            </div>
            <div className="my-form-field">
                <label> Full Name</label>
                <input type="text" placeholder="Enter your full name" onChange={handleFullNameChange} name="fullName"/>
                {fullName && <p>Fullname: {fullName} </p>}
            </div>
            <button type="submit">Submit</button>
        </form>
    )   
}
export default ControlledForm;
import { createContext, useContext, useState } from "react";

// ContextAPI is used for avoiding props drilling hell by putting the value of parent in a context container and any of its child can assess the value easily 
/*
Process:
create the context first
provide the DI (dependency injection)
consume the context value
 */

//creating user context or container
let UserContext = createContext()
const Acomp = () => {
    const handleNameChange = () => {
        setUser({...user, name: "Jane"})    
    }
    const [user, setUser] = useState({name: "John", age: 30})
    return (
        <div>
            <h3>A Component</h3>
            <button onClick={handleNameChange}>Change Name</button>
            {/* Dependency injection (DI) */}
            <UserContext.Provider value={user}>
                <Bcomp /> 
                {/* the heirarchial component must be inside the container to assess the value */}

            </UserContext.Provider>
        </div>
    )
    
}
export default Acomp;
const Bcomp = () => {
    return (
        <div>
            <h3>B Component</h3>
            <Ccomp />
        </div>
    )
    
}

const Ccomp = () => {
    //consuming the context value
    let user = useContext(UserContext)
    return (
        <div>
            <h3>C Component</h3>
            <p>Name: {user.name} </p>
            <p>Age: {user.age} </p>
        </div>
    )
    
}

import { useEffect } from "react";
import { useLocation } from "react-router";

const MyUser = ()=>{
    let location = useLocation();
    let msg = location.state || "No message" //we are receiving string directly from state so no need of null safe operator

    //fetching data from api

    // this is callback fn
    // let fetchAllUsers = () => {
    //     fetch("https://jsonplaceholder.typicode.com/users/")
    //     .then((res)=>res.json())
    //     .then((data)=>console.log(data))
    //     .catch((e)=>console.log("erro: ",e))
    //     .finally(
    //         ()=>console.log("fetching done")
    //     )

    // }

    let fetchAllUsers = async () => {
        let res = await fetch("https://jsonplaceholder.typicode.com/users/");
        let data = await res.json();
        console.log(data);
    }
    useEffect(
        ()=>fetchAllUsers(), [] 
    )

    return(
        <div>
            <h3>User Profile</h3>
            <b>Message: {msg} </b>
        </div>
    )
}
export default MyUser;
import { useLocation, useNavigate, useParams, useSearchParams } from "react-router";

const UserDetail = ()=>{
    let navigate = useNavigate();
    let goToHome = () => {
        navigate("/" , {
            state: "Hello from User Detail" // sending state from navigation
        });
    }
    let location = useLocation();
    let id = location.state?.id || 0; // "?." is null safe operator, if state is null then it wont run the id isntead the fall back value 0 due to || is returned
    //useparams help to get route parameters
    let {userid} = useParams(); 

    //accessing search parameters data
    //eg: http://localhost:5173/detail/3534534?name=ram&&age=887 here we are using query parameter
    let [searchParams] = useSearchParams();
    let name = searchParams.get("name");
    let age = searchParams.get("age");
    return(
        <div>
            <h3>User Detail</h3>
            <b>User Id: {userid}</b>
            <b>Name: {name} </b>
            <b>Age: {age} </b>
            <button onClick={goToHome}>Go to User Home</button>
            <b>Id: {id} </b>
        </div>
    )
}
export default UserDetail;
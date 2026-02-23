import Login from "./Login.jsx";
import MyDashboard from "./MyDashboard.jsx";

const Check = ({isLoggedIn})=>{
    //using if else for conditional rendering
    if(isLoggedIn){
        return (<MyDashboard />)
    }else{
        return (<Login />)
    }

}
export default Check;
import { useContext } from "react";
import { ThemeContext } from "./CustomThemeContextProvider";
import "./home.css"
const MyHome = () => {
    //ThemeContext is a container whose value is extracted by useContext
    let [isLight] = useContext(ThemeContext)
    return (
        <div style={
            {
                backgroundColor: isLight ? "white" : "black",
                color: isLight ? "purple" : "yellow",
            }
        }>
            <h3>My Home Page</h3>
            <p className={`common-p ${isLight ? "light-p" : "dark-p"}`}>This is the home page content</p> 
            {/* common-p will work no matter what, but the light and dark css work based on the ternary condition */}
        </div>
    )
}
export default MyHome;
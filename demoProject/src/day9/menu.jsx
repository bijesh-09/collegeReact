import { useContext } from "react";
import { ThemeContext } from "./CustomThemeContextProvider";

const MyMenu = () => {
    let [isLight, setIsLight] = useContext(ThemeContext)
    return(
        <div>
            <h3>My Menu Component</h3>
            <b>{isLight ? "Light Theme" : "Dark Theme"} </b>
            {/* for displaying the content for switching theme */}
            <button onClick={()=>setIsLight(!isLight)}>Toggle Theme</button>
        </div>
    )
}
export default MyMenu;
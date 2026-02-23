import "./navbar.css";

let Navbar = () => {//if fn started with capital letter then it is component
    //defining event handler function so that we dont have to write inline function in tha h4 Profile tag
    let handleProfileMenuCLick = (event) => {
        console.log("Profile clicked");
        event.target.style.backgroundColor = "yellow";
        event.target.style.color = "Black";
        event.target.style.padding= "50px 20px";
        event.target.style.borderRadius= "10px";
        console.log(event.target.style);
        
    }

    /*
    let event = {
        target: {
            value: "Profile", 
            stule: { 
                backgroundColor: "yellow",
                color: "Black",}
                } 
                }
                */ 

   let handleSearchOnChange = (event) => {
        console.log(event.target.value)
        event.target.style.backgroundColor = "aqua";
        // let value = event.target.value;
        // console.log(value.length);
        event.target.style.backgroundColor = "rgb(23,45,67) "

        //randomizing background color for each key stroke in search box
        let random1 = Math.random()*255//gives double type value from 0-255 real numbers
        let random2 = Math.random()*255
        let random3 = Math.random()*255
        // console.log(random1.toFixed(0));//gives the integer value
        let red = random1.toFixed(0);
        let green = random2.toFixed(0);
        let blue = random3.toFixed(0);
        event.target.style.backgroundColor = `rgb(${red},${green},${blue})`
        

   }
    return(
        <div className="navbar">
            {/* inline styling */}
            <h1 style={
                {
                    backgroundColor: "green",
                    padding: "10px",
                    borderRadius: "50%"
                }
            }>My Navbar</h1>
            <div className="menus">
                <input onChange={handleSearchOnChange} placeholder="Search..." />
                <h4 onClick={ (event) => { 
                                            console.log(event);
                                            console.log("Home clicked")
                                        }
                            }>Home</h4>
                <h4 onClick={ handleProfileMenuCLick }>Profile</h4>
            </div>
        </div>
    )
}
export default Navbar;
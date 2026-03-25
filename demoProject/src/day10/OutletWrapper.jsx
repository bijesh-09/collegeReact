import { Link, Outlet } from "react-router";

const OutletWrapper = () => {
    return (
        <div>
            {/* navbar */}
            <div className="">
                <h2>My Navbar</h2>
                <Link to={"/"}>User Home</Link>
                <Link to={"/detail"} state={{id: 45}}>User Details</Link> {/* sending state from link */}

            </div>

            {/* outlet */}
            <Outlet />
            <div className="footer">
                <p>This is my footer</p>
            </div>
        </div>
    )
}
export default OutletWrapper;
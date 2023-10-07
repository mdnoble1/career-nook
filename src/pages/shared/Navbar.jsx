import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
        </div>
    );
};

export default Navbar;
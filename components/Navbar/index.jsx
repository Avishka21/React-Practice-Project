import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./navbarElements";

const Navbar = () => {
    return (
        <Nav>
            <Bars />

            <NavMenu>
            <NavLink to="/team" activeClassName="active">
                    <b>Home</b>
                </NavLink>
                <NavLink to="/about" activeClassName="active">
                    <b>About</b>
                </NavLink>
                <NavLink to="/events" activeClassName="active">
                    <b>Events</b>
                </NavLink>
                <NavLink to="/annual" activeClassName="active">
                    <b>Report</b>
                </NavLink>
               
                <NavLink to="/blogs" activeClassName="active">
                    <b>Blogs</b>
                </NavLink>
                <NavLink to="/sign-up" activeClassName="active">
                    <b>Sign Up</b>
                </NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/signin">
                    <b>Sign In</b>
                </NavBtnLink>
            </NavBtn>
        </Nav>
    );
};

export default Navbar;

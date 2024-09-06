import React, { useState } from "react";
import Logo from "../assets/pizzaLogo.png";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./navbarElements";

const Navbar = () => {
    // State to handle menu open/close
    const [openLinks, setOpenLinks] = useState(false);

    // Function to toggle menu
    const handleToggle = () => {
        setOpenLinks(!openLinks);
    };

    return (
        <>
            <Nav>
                <Bars onClick={handleToggle} />
                <div className={`leftSide ${openLinks ? "open" : "close"}`}>
                    <img src={Logo} alt="Logo" />
                    <NavMenu>
                        <NavLink to="/about" activeStyle>
                            About
                        </NavLink>
                        <NavLink to="/events" activeStyle>
                            Events
                        </NavLink>
                        <NavLink to="/annual" activeStyle>
                            Annual Report
                        </NavLink>
                        <NavLink to="/team" activeStyle>
                            Teams
                        </NavLink>
                        <NavLink to="/blogs" activeStyle>
                            Blogs
                        </NavLink>
                        <NavLink to="/sign-up" activeStyle>
                            Sign Up
                        </NavLink>
                    </NavMenu>
                </div>
                <NavBtn>
                    <NavBtnLink to="/signin">
                        Sign In
                    </NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar;

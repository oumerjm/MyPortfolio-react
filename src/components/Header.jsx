import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = ()=>{
    return (
        <div className="header">
            <img src="./Mylogo.png" alt="mylogo" />
            <ul>
                <NavLink to="/"><li>Home</li></NavLink>
                <NavLink to="/about"><li>About</li></NavLink>
                <NavLink to = "/projects"><li>Projects</li></NavLink>
                <NavLink to = "/contact"><li>Contact</li></NavLink>
            </ul>
            <button>Learn more</button>
        </div>
    )
}

export default Header
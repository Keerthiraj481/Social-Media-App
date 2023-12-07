import React from "react";
import NavLinks from "./navlinks.component";
import UserLinks from "./userlinks.component";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center border-b border-gray-100 w-full px-44 py-2">
            <Link to="/">
                <div className="text-3xl font-extrabold text-gray-900 dark:text-gray">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-red-600 from-blue-400">
        SocialHop
        </span>{" "}
        App
        </div>
            </Link>
        
        <div className="flex justify-center items-center mx-auto">
        <NavLinks></NavLinks>
    </div>
    <div>
        <UserLinks></UserLinks>
    </div>
    </div>
    );
};
export default Navbar;
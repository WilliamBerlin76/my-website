import React, { useState } from "react";
import hamburger from "./hamburger.module.scss";

import HamburgerNav from "../hamburgerNav/hamburgerNav.js";

const Hamburger = () => {

    const [showNav, setShowNav] = useState(false);

    const toggleNav = e => {
        setShowNav(!showNav);
    };
    
    return (
        <div className={hamburger.container}>
            <div className={hamburger.bars} onClick={toggleNav}>
                <div className={hamburger.bar}></div>
                <div className={hamburger.bar}></div>
                <div className={hamburger.bar}></div>
            </div>
            {showNav && <HamburgerNav />} 
        </div>
    )
};

export default Hamburger;
import React from "react";
import hamburgerNav from "./hamburgerNav.module.scss";

const HamburgerNav = () => {
    return (
        <div className={hamburgerNav.container}>
            <span>
                <a href="#skills" className={hamburgerNav.linkItem}>skills</a>
            </span>
            <span>
                <a href="#projects" className={hamburgerNav.linkItem}>projects</a>
            </span>
            <span>
                <a href="#contact" className={hamburgerNav.linkItem}>contact</a>
            </span>
        </div>
    )
};

export default HamburgerNav;
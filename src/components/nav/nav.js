import React, { useState, useEffect} from 'react';
import nav from './nav.module.scss';
import Logo from "../../assets/logo.jpg";
import Hamburger from "../hamburger/hamburger.js";

const Nav = () => {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
        return () => window.removeEventListener("resize", () => setWidth(window.innerWidth));
        
    })
    return (
        <section className={nav.navContainer}>
            <div className={nav.logoContainer}>
                <img  className={nav.logo} src={Logo} alt="W logo" />
            </div>
            {width <= 1000 ?
                <Hamburger /> :
                <div className={nav.navButtons}>
                    <a href="#skills" className={nav.linkItem}>skills</a>
                    <a href="#projects" className={nav.linkItem}>projects</a>
                    <a href="#contact" className={nav.linkItem}>contact</a>
                </div>
            }
        </section>
    )
};

export default Nav;

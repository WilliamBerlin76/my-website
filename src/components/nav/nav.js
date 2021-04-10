import React from 'react';
import nav from './nav.module.scss';
import Logo from "../../assets/logo.jpg";

const Nav = () => {
    return (
        <section className={nav.navContainer}>
            <div className={nav.logoContainer}>
                <img  className={nav.logo} src={Logo} alt="W logo" />
            </div>

            <div className={nav.navButtons}>
                <a href="#skills" className={nav.linkItem}>Skills</a>
                <a href="#projects" className={nav.linkItem}>projects</a>
                <a href="#contact" className={nav.linkItem}>contact</a>
            </div>
        </section>
    )
};

export default Nav;

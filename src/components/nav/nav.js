import React from 'react';
import nav from './nav.module.scss';
import Logo from "../../assets/logo.jpg";
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <section className={nav.navContainer}>
            <div className={nav.logoContainer}>
                <img  className={nav.logo} src={Logo} alt="W logo" />
            </div>

            <div className={nav.navButtons}>
                <NavLink className={nav.linkItem} to="/">resume</NavLink>
                <NavLink className={nav.linkItem} to="/">projects</NavLink>
                <NavLink className={nav.linkItem} to="/">contact</NavLink>
            </div>
        </section>
    )
};

export default Nav;

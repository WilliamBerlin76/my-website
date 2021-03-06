import React, { useState } from "react";
import home from "./home.module.scss";
import About from "../../components/about/about.js";

const Home = () => {

    const [showAbout, setShowAbout] = useState(false);

    const toggleAbout = e => {
        setShowAbout(!showAbout);
    }
    return (
        <section className={home.pageContainer}>
            <div className={home.colorOverlay}></div>
        
            <div className={home.mainTextContainer}>
                <span className={home.headerText}>
                    Hi, <br></br> I'm William!
                </span>
                <span className={home.headerSubText}>
                    I'm a software developer
                </span>
                <button 
                    className={home.aboutButton}
                    onClick={toggleAbout}
                >about me</button>
                <div className={home.iconContainer}>
                    <a href="https://github.com/WilliamBerlin76" target="_blank" rel="noreferrer">
                            <i className="fab fa-github"/>
                    </a>
                    <a href="https://www.linkedin.com/in/william-berlin-75695b193/" target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin"/>
                    </a>
                </div>
                
            </div>
            <About 
                showAbout={showAbout}
            />
        </section>
    )
};

export default Home;

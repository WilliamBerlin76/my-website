import React from 'react';
import home from "./home.module.scss";

const Home = () => {
    return (
        <section className={home.pageContainer}>
            <div className={home.colorOverlay}></div>
            <div className={home.mainTextContainer}>
                <span className={home.headerText}>
                    Hey, <br></br> I'm Will
                </span>
                <span className={home.headerSubText}>
                    I build websites.
                </span>
                <button className={home.aboutButton}>about me</button>
                <div className={home.iconContainer}>
                    <a href="https://github.com/WilliamBerlin76" target="_blank" rel="noreferrer">
                            <i className="fab fa-github"/>
                    </a>
                    <a href="https://www.linkedin.com/in/william-berlin-75695b193/" target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin"/>
                    </a>
                </div>
                
            </div>
            
        </section>
    )
};

export default Home;

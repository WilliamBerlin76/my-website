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
            </div>
            
        </section>
    )
};

export default Home;

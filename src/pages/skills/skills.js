import React from 'react';
import skills from "./skills.module.scss";

const Skills = () => {
    return (
        <section className={skills.skillsSection}>
            <div className={skills.colorOverlay}></div>
            <span className={skills.headerText}>Tools that I work with</span> 
        </section>
    )
}

export default Skills;

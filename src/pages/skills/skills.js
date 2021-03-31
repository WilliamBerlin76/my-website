import React from 'react';
import skills from "./skills.module.scss";
import SkillCards from "../../components/skillCards/skillCards.js";

const Skills = () => {
    return (
        <section className={skills.skillsSection}>
            <div className={skills.colorOverlay}></div>
            <span className={skills.headerText}>Tools that I work with</span>
            <SkillCards /> 
        </section>
    )
}

export default Skills;

import React from 'react';
import skills from "./skills.module.scss";
import SkillCards from "../../components/skillCards/skillCards.js";
import { skillArray } from "../../data/skillData";

const Skills = () => {
    return (
        <section className={skills.skillsSection}>
            <div className={skills.colorOverlay}></div>
            <span className={skills.headerText}>Tools that I work with</span>
            <div className={skills.cardsContainer}>
                {skillArray.map(item => {
                    return (
                        <SkillCards
                            title={item.title}
                            skills={item.skills}
                        /> 
                    );
                })}
            </div>
            
        </section>
    )
}

export default Skills;

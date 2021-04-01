import React from 'react'
import skillCard from "./skillCards.module.scss";

const SkillCards = ({ title, skills }) => {
    return (
        <div className={skillCard.card}>
            <div className={skillCard.titleContainer}>
                <span className={skillCard.cardTitle}>{title}</span>
            </div>
            <hr />
            <div className={skillCard.skillContainer}>
                {skills.map(item => {
                    return (
                        <span className={skillCard.skillText}>{item}</span>
                    );
                })}
            </div>
        </div>
    );
};

export default SkillCards;

import React from 'react'
import skillCard from "./skillCards.module.scss";

import { frontend, backend, other } from "../../data/skillData.js";

export default function SkillCards() {
    return (
        <div className={skillCard.container}>
            <div className={skillCard.card}>
                <div className={skillCard.titleContainer}>
                    <span className={skillCard.cardTitle}>Frontend</span>
                </div>
            
            </div>
            <div className={skillCard.card}>
                <div className={skillCard.titleContainer}>
                    <span className={skillCard.cardTitle}>Backend</span>
                </div>
                
            </div>
            <div className={skillCard.card}>
                <div className={skillCard.titleContainer}>
                    <span className={skillCard.cardTitle}>Additional Skills</span>
                </div>
                
            </div>
        </div>
    )
}

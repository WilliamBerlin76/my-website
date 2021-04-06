import React from 'react';
import projects from './projects.module.scss';
import Project from '../../components/project/project.js';
import { projectData } from '../../data/projectData';

export default function Projects() {
    return (
        <section className={projects.pageContainer}>
            <div className={projects.colorOverlay}></div>
            <div className={projects.titleText}>Things that I've worked on</div>
            <div className={projects.cardsContainer}>
                {projectData.map(item => {
                    return (
                        <Project 
                            name={item.name}
                            coverImage={item.coverImage}
                        />
                    )
                })}

            </div>
        </section>
    )
};

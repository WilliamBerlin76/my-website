import React from 'react';
import projects from './projects.module.scss';

export default function Projects() {
    return (
        <section className={projects.pageContainer}>
            <div className={projects.colorOverlay}></div>
            <span className={projects.titleText}>Things that I've worked on</span>
        </section>
    )
};

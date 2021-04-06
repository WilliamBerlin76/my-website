import React from 'react';
import project from "./project.module.scss";


const Project = (props) => {
    return (
        <div className={project.card}>
            <div className={project.imageContainer}>
                <div className={project.colorOverlay}></div>
                <img src={props.coverImage} alt="project cover" className={project.pic}/>
            </div>
            <div className={project.titleContainer}>
                <span className={project.titleText}>{props.name}</span>
            </div>
            
        </div>
    )
};

export default Project;

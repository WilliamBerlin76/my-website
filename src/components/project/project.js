import React, { useState } from 'react';
import project from "./project.module.scss";
import ProjectModal from "../projectModal/projectModal.js";

const Project = (props) => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal)
    };

    return (
        <>
            <div 
                className={project.card}
                onClick={toggleModal}
            >
                <div className={project.imageContainer}>
                    <div className={project.colorOverlay}></div>
                    <img src={props.coverImage} alt="project cover" className={project.pic}/>
                </div>
                <div className={project.titleContainer}>
                    <span className={project.titleText}>{props.name}</span>
                </div>
            </div>

            {showModal && (
                <ProjectModal 
                    name={props.name}
                    coverImage={props.coverImage}
                    toggleModal={toggleModal}
                    appLink={props.appLink}
                    frontendLink={props.frontendLink}
                    backendLink={props.backendLink}
                    githubLink={props.githubLink}
                    description={props.description}
                    techBullets={props.techBullets}
                />
            )}
        </>
    )
};

export default Project;

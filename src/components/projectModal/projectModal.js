import React from 'react';
import projectModal from "./projectModal.module.scss";

const ProjectModal = ({ coverImage, name, toggleModal, appLink, githubLink, frontendLink, backendLink, description, techBullets }) => {
    return (
        <>
            <div 
                className={projectModal.colorOverlay}
                onClick={toggleModal}
            >
            </div>
            <div 
                className={projectModal.modal}
            >
                <div className={projectModal.imgContainer}>
                    <img src={coverImage} alt="project"/>
                </div>
                <div className={projectModal.nameContainer}>
                    <span className={projectModal.nameText}>{name}</span>
                </div>
                <div className={projectModal.links}>
                    {appLink && (
                        <a 
                            className={projectModal.projectLink} 
                            href={appLink}
                            target="_blank"
                            rel="noreferrer"
                        >Try here!</a>
                    )}
                    {frontendLink && (
                        <a 
                            className={projectModal.projectLink} 
                            href={frontendLink}
                            target="_blank"
                            rel="noreferrer"
                        >Frontend repo</a>
                    )}
                    {backendLink && (
                        <a 
                            className={projectModal.projectLink} 
                            href={backendLink}
                            target="_blank"
                            rel="noreferrer"
                        >Backend repo</a>
                    )}
                    {githubLink && (
                        <a 
                            className={projectModal.projectLink} 
                            href={githubLink}
                            target="_blank"
                            rel="noreferrer"
                        >github page</a>
                    )}
                </div>
                <div className={projectModal.descriptionContainer}>
                    {description}
                </div>
                <div className={projectModal.techContainer}>
                    <div className={projectModal.techTitle}>Technologies I used</div>
                    <ul className={projectModal.listContainer}>
                        {techBullets.map(item => {
                            return (
                                <li>{item}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
};

export default ProjectModal;

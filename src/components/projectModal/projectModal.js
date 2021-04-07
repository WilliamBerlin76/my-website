import React from 'react';
import projectModal from "./projectModal.module.scss";

const ProjectModal = ({ coverImage, name, toggleModal }) => {
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
            </div>
        </>
    )
};

export default ProjectModal;

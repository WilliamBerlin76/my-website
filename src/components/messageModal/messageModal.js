import React from 'react';
import messageModal from "./messageModal.module.scss"

export default function MessageModal({ message, removeResopnseMessage }) {
    return (
        <>
        <div className={messageModal.colorOverlay}></div>
        <div className={messageModal.modalContainer}>
            <div className={messageModal.modal}>
                <p className={messageModal.message}>{message}</p>
                <button 
                    className={messageModal.confirmButton}
                    onClick={removeResopnseMessage}
                >OK</button>
            </div>
        </div>
       
        </>
    )
};

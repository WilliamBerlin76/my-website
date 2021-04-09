import React from 'react';
import messageModal from "./messageModal.module.scss"

export default function MessageModal({ message, removeResopnseMessage }) {
    return (
        <>
        <div className={messageModal.colorOverlay}></div>
        <div className={messageModal.modal}>

        </div>
        </>
    )
};

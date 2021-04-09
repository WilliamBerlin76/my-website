import React, { useState } from 'react';
import axios from "axios";
import ReactLoading from "react-loading";
import contactForm from "./contactForm.module.scss";
import MessageModal from "../messageModal/messageModal.js";

const ContactForm = () => {

    const [message, setMessage] = useState({});
    const [responseMessage, setResponseMessage] = useState("");
    const [isFetching, setIsFetching] = useState(false);
    const [nameErr, setNameErr] = useState(false);
    const [emailErr, setEmailErr] = useState(false);
    const [subjectErr, setSubjectErr] = useState(false);
    const [messageErr, setMessageErr] = useState(false);

    const emailReg = new RegExp(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/);

    const removeResponseMessage = () => {
        setResponseMessage("");
    }

    const handleChange = e => {
        setMessage({
            ...message,
            [e.target.name]: e.target.value
        });
        message.senderName && setNameErr(false);
        message.subject && setSubjectErr(false);
        message.message && setMessageErr(false);
        message.senderEmail && emailReg.test(message.senderEmail) && setEmailErr(false);
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (!message.senderName){
            setNameErr(true);
        } 
        if (!message.senderEmail || !emailReg.test(message.senderEmail)){
            setEmailErr(true);
        } 

        if (!message.subject){
            setSubjectErr(true);
        } 

        if (!message.message){
            setMessageErr(true);
        } 
        
        if (message.senderEmail && emailReg.test(message.senderEmail) && message.senderName && message.subject && message.message) {
            setIsFetching(true);
            axios.post(process.env.REACT_APP_API_POST, message)
            .then(res => {
                setResponseMessage(`Your message was sent.\nThank you for reaching out!`);
                setIsFetching(false);
            })
            .catch(err => {
                setResponseMessage("Oh no! Your message failed to send.\nPlease try again later");
                setIsFetching(false);
            });
        } else {
            e.preventDefault();
        }
    };

    return (
        <>
        {responseMessage && (
            <MessageModal 
                message={responseMessage}
                removeResopnseMessage={removeResponseMessage}
            />
        )}
        <div className={contactForm.formContainer}>
            
            <form className={contactForm.form}
                onSubmit={handleSubmit}
            >
                {nameErr && (<span className={contactForm.errors}>*Please enter your name</span>)}
                <input
                    className={contactForm.inputField} 
                    placeholder="Name"
                    name="senderName"
                    onChange={handleChange}
                />
                {emailErr && (<span className={contactForm.errors}>*Please enter a valid mail</span>)}
                <input
                    className={contactForm.inputField} 
                    placeholder="Email"
                    name="senderEmail"
                    onChange={handleChange}
                />
                {subjectErr && (<span className={contactForm.errors}>*Please add a subject</span>)}
                <input
                    className={contactForm.inputField} 
                    placeholder="Subject"
                    name="subject"
                    onChange={handleChange}
                />
                {messageErr && (<span className={contactForm.errors}>*Please add your message</span>)}
                <textarea
                    className={contactForm.largeInput}
                    placeholder="Message..."
                    name="message"
                    onChange={handleChange}
                />
                {isFetching ? (
                    <ReactLoading type="spin" height={50} width={50}/>
                ) : (
                    <button
                        className={contactForm.sendButton}
                    >Send!</button>
                )}
                
            </form> 
        </div>
        </>
    )
};

export default ContactForm;

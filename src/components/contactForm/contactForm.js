import React, { useState } from 'react';
import axios from "axios";
import ReactLoading from "react-loading";
import contactForm from "./contactForm.module.scss";

const ContactForm = () => {

    const [message, setMessage] = useState({});
    const [displayResponse, setDisplayResponse] = useState(false);
    const [isFetching, setIsFetching] = useState(false);
    const [nameErr, setNameErr] = useState(false);
    const [emailErr, setEmailErr] = useState(false);
    const [subjectErr, setSubjectErr] = useState(false);
    const [messageErr, setMessageErr] = useState(false);

    const emailReg = new RegExp(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/);

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
                alert(`Your message was sent.\nThank you for reaching out!`);
                setIsFetching(false);
            })
            .catch(err => {
                console.log(err);
                alert('There was an error sending your message to the server');
                setIsFetching(false);
            });
        } else {
            e.preventDefault();
        }
    };

    return (
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
    )
};

export default ContactForm;

import React, { useState } from 'react';
import contactForm from "./contactForm.module.scss";

import axios from "axios";

const ContactForm = () => {

    const [message, setMessage] = useState({});
    const [displayResponse, setDisplayResponse] = useState(false);

    const handleChange = e => {
        setMessage({
            ...message,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        axios.post(process.env.REACT_APP_API_POST, message)
            .then(res => {
                alert("your message has been sent");
            }).catch(err => {
                alert("failed sending message");
            })
    };

    return (
        <div className={contactForm.formContainer}>
           
            <form className={contactForm.form}
                onSubmit={handleSubmit}
            >
                <input
                    className={contactForm.inputField} 
                    placeholder="Name"
                    name="senderName"
                    onChange={handleChange}
                />
                <input
                    className={contactForm.inputField} 
                    placeholder="Email"
                    name="senderEmail"
                    onChange={handleChange}
                />
                <input
                    className={contactForm.inputField} 
                    placeholder="Subject"
                    name="subject"
                    onChange={handleChange}
                />
                <textarea
                    className={contactForm.largeInput}
                    placeholder="Message..."
                    name="message"
                    onChange={handleChange}
                />
                <button
                    className={contactForm.sendButton}
                >Send!</button>
            </form> 
        </div>
    )
};

export default ContactForm;

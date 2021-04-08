import React, { useState } from 'react';
import contactForm from "./contactForm.module.scss";

const ContactForm = () => {

    const [message, setMessage] = useState({});

    const handleChange = e => {
        setMessage({
            ...message,
            [e.target.name]: e.target.value
        });
        console.log(message);
    }

    return (
        <div className={contactForm.formContainer}>
            <form className={contactForm.form}>
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
                <button>Send!</button>
            </form> 
        </div>
    )
};

export default ContactForm;
